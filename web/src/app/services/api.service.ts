import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

// decorator que diz ao angular que a classe pode ser injetada em outros lugares
@Injectable({
  providedIn: 'root' // única instância do serviço para toda a aplicação (Singleton)
})
export class ApiService {
  private baseUrl = environment.api;
  constructor(private http: HttpClient) { }

  // if (!this.baseUrl) {
  //   throw new Error('API base url not found');
  // }

  // A generics <T> permite a quem chamar o método dizer qual o tipo de dado espera receber, garante autocomplete e validação de tipos
  
  get<T>(path: string) {
    return this.http.get<T>(`${this.baseUrl}${path}`);
  }

  post<T>(path: string, body: unknown) {
    return this.http.post<T>(`${this.baseUrl}${path}`, body);
  }
  
  patch<T>(path: string, body: unknown) {
    return this.http.patch<T>(`${this.baseUrl}${path}`, body);
  }

  delete<T>(path: string) {
    return this.http.delete<T>(`${this.baseUrl}${path}`);
  }
}
