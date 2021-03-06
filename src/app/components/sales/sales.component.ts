import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { Sale } from '../../models/Sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass']
})
export class SalesComponent implements OnInit {
  public today = new Date();
  public currentMonth = this.today.toLocaleString('default', { month: 'long' });
  public currentDay = this.today.getDate();
  public currentYear = this.today.getFullYear();

  public menuFilterActive = false;

  public saleList: Sale[] = [];

  public totalSales = 0;

  public filteredSaleList: Sale[] = this.saleList;

  public dateOptions = [
    { id: 1, name: 'Hoy' },
    { id: 2, name: 'Esta semana' },
    { id: 3, name: this.currentMonth },
  ];
  public selectedDateOption = { id: 4, name: 'todo el tiempo' };

  public filterOptions = [
    { id: 1, name: 'Cobro con datáfono' },
    { id: 2, name: 'Cobros con link de pago' },
    { id: 3, name: 'Ver todo' },
  ];
  public selectedFilterOption = this.filterOptions[2];

  constructor(private salesService: SalesService) {

    this.getSalesData();
  }

  ngOnInit(): void {

    this.getStorageFilters();

    const sales = this.salesService.getSales();
    console.log(sales);

  }

  selectOptionDate(option): void {
    this.selectedDateOption = option;
  }
  selectOptionFilter(option): void {
    this.selectedFilterOption = option;
  }

  orderByFilters(): void {
    this.salesService.setFilterDateStorage(this.selectedDateOption);
    this.salesService.setFilterOptionStorage(this.selectedFilterOption);
    const listFilteredByDate = this.filterSalesByDate(this.saleList, this.selectedDateOption.id);
    const listFilteredByOption = this.filterSalesByOption(listFilteredByDate, this.selectedFilterOption.id);

    this.filteredSaleList = listFilteredByOption;
    this.sumSales();
  }

  filterSalesByDate(array: Sale[], date: number): Sale[] {
    let newArr: Sale[] = array;
    if (date < 3) { newArr = array.filter(f => f.fakeDateId === date); }
    else { newArr = array; }

    return newArr;
  }

  filterSalesByOption(array: Sale[], option: number): Sale[] {
    let newArr = array;
    if (option === 1 || option === 2) { newArr = array.filter(f => f.paymentTypeId === option); }

    return newArr;
  }

  getStorageFilters(): void {
    const localDateFilter: { name: string, id: number } = this.salesService.getFilterDateStorage();
    const localOptionFilter: { name: string, id: number } = this.salesService.getFilterOptionStorage();
    if (localDateFilter) { this.selectedDateOption = localDateFilter; }
    if (localOptionFilter) { this.selectedFilterOption = localOptionFilter; }

    this.orderByFilters();
  }

  sumSales(): void {
    this.totalSales = 0;
    this.filteredSaleList.map(s => this.totalSales += s.value);
  }

  getSalesData(): void {
    this.saleList = this.salesService.getSales();
  }
}
