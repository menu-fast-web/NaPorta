import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export type MenuItemCategory = 'breakfast' | 'lunch' | 'dinner' | 'drinks' | 'snacks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: MenuItemCategory;
  available: boolean;
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private api: ApiService) {}

  getAll() {
    return this.api.get<MenuItem[]>('/menu');
  }

  getAllAdmin() {
    return this.api.get<MenuItem[]>('/menu/all');
  }

  update(id: string, data: Partial<MenuItem>) {
    return this.api.patch<MenuItem>(`/menu/${id}`, data);
  }

  create(data: Omit<MenuItem, 'id'>) {
    return this.api.post<MenuItem>('/menu', data);
  }
}
