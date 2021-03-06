import { Injectable } from '@angular/core';
import Sales from '../data/sales';
import { Sale } from '../models/Sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor() { }

  getSales(): Sale[] {
    return Sales;
  }

  setFilterOptionStorage(filter): void {
    localStorage.setItem('filterOption', JSON.stringify(filter));
  }
  setFilterDateStorage(filter): void {
    localStorage.setItem('dateOption', JSON.stringify(filter));
  }

  getFilterOptionStorage(): { name: string, id: number } {
    return JSON.parse(localStorage.getItem('filterOption'));
  }

  getFilterDateStorage(): { name: string, id: number } {
    return JSON.parse(localStorage.getItem('dateOption'));
  }
}
