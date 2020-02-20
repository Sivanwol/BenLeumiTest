import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";
import { StockService } from '../../services/stock.service';

@Component({
  selector: "app-stock-bar",
  templateUrl: "./stock-bar.component.html",
  styleUrls: ["./stock-bar.component.scss"]
})
export class StockBarComponent implements OnInit {
  refreshRates: SelectItem[];
  selectRate: number;
  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.refreshRates = [
      { label: "30 sec", value: 30  },
      { label: "1 min", value: 60 },
      { label: "2 min", value: 120 },
      { label: "5 min", value: 300 }
    ];
    this.selectRate = this.refreshRates[0].value;
    this.stockService.updateRefreashRate(this.selectRate);
  }
  onRefreashRateSelected($event) {
    this.stockService.updateRefreashRate(this.selectRate);
  }
}
