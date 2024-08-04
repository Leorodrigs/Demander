import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.css'],
})
export class TreemapComponent implements OnInit {
  options: any;

  constructor() {}

  ngOnInit(): void {
    interface SalesData {
      [key: string]: number;
    }

    const sales2022: SalesData = {
      Honda: 140000,
      Yamaha: 90000,
      Suzuki: 40000,
      Kawasaki: 28000,
      BMW: 22000,
    };

    const sales2023: SalesData = {
      Honda: 150000,
      Yamaha: 85000,
      Suzuki: 45000,
      Kawasaki: 30000,
      BMW: 20000,
    };

    const data = Object.keys(sales2023).map((brand) => {
      const value2023 = sales2023[brand];
      const value2022 = sales2022[brand];
      const change = (((value2023 - value2022) / value2022) * 100).toFixed(2);
      let color = '';

      if (value2023 > 130000) {
        color = '#69c160';
      } else if (value2023 >= 80000 && value2023 <= 99999) {
        color = '#db4e44';
      } else if (value2023 >= 40000 && value2023 <= 79999) {
        color = '#0f9b01';
      } else if (value2023 >= 29000 && value2023 <= 39000) {
        color = '#69c160';
      } else {
        color = '#d91002';
      }

      return {
        name: brand,
        value: value2023,
        change: change,
        itemStyle: {
          color: color,
        },
      };
    });

    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          return `${params.name}<br/>Vendas: ${params.value}<br/>Mudança: ${params.data.change}%`;
        },
      },
      series: [
        {
          type: 'treemap',
          label: {
            show: true,
            formatter: (params: any) => {
              return `${params.name}\n${params.data.change}%`;
            },
          },
          data: data,
        },
      ],
    };
  }
}
