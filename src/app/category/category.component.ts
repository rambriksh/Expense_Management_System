import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut1: any;
  minimalist:any;

  data1 = [];


  ngOnInit() {

    this.doughnut1 =  new Chart('doughnut3',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          
        },legend: {
					position: 'left',
				},animation: {
					animateScale: true,
					animateRotate: true
        } 
        
      },
      data: {
				datasets: [{
          //data: [45,10,5,25,15],
          data: [50,50],
					//backgroundColor: ["red","orange","yellow","green","blue"],
          backgroundColor: ["yellow"],
          label: 'Dataset 1'
				}],
				//labels: ['Red','Orange','Yellow','Green','Blue']
			}
    })
}

}
