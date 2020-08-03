import { Component, OnInit, Input } from '@angular/core';
import { Plan } from '../interfaces/plan.interface';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() plans: Plan
  
  constructor() { }


  ngOnInit(): void {
  }

}
