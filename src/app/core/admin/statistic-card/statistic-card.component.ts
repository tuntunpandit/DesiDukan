import { Component, input, OnInit } from '@angular/core';
import { Stat, StatOrder } from '../../../models/stats';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-statistic-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './statistic-card.component.html',
  styleUrl: './statistic-card.component.scss',
})
export class StatisticCardComponent implements OnInit {
  overAllSalesData = input.required<StatOrder>();
  currentDaySaleData = input.required<any>();
  isSalesDataLoading = input.required<boolean>();
  totalOrder = input.required<number>();
  constructor() {}

  ngOnInit(): void {
    console.log('Child');
    console.log('sales dd', this.overAllSalesData());
    console.log('cur', this.currentDaySaleData());
  }
}
