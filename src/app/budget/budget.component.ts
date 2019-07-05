import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor() { }
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut: any;
  minimalist:any;

  data1 = [];


  ngOnInit() {

    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
           
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
          //data: [45,10,5,25,15],
          data: [30,70],
					//backgroundColor: ["red","orange","yellow","green","blue"],
          backgroundColor: ["blue"],
          label: 'Dataset 1'
				}],
				//labels: ['Red','Orange','Yellow','Green','Blue']
			}
    })
}
}
