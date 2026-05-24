import fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import z from "zod";
import { prisma } from "./lib/prisma";

export const app = fastify();

const getUserSchemaRequest = z.object({
  query: z.string().optional(),
  page: z.number().optional().default(1),
});

app.get('/users', async (req: FastifyRequest, reply: FastifyReply) => {
  const { query, page } = getUserSchemaRequest.parse(req.query);

  try {
    const users = await prisma.user.findMany({
      where: {
        name: {
          contains: query ? query : "",
        },
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return reply.status(200).send(users);
  } catch (err) {
    console.error('Error: ', err);
  };
});

const createUserSchemaRequest = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(6),
  // rules: z.array(z.enum(["admin", "user"])).default(["user"]),
});

app.post("/users", async (req: FastifyRequest, reply: FastifyReply) => {
  const { name, email, password } = createUserSchemaRequest.parse(req.body);

  const emailAlredyExists = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (emailAlredyExists) {
    return reply.status(400).send({ error: "Email already exists." })
  };
  
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash: password
      }
    });

    return reply.status(201).send(user);
  } catch (err) {
    console.error("Houve um problema no cadastro do usuário: ", err);
  }
});

// app.get("/", () => {
//   return { ok: true };
// });

