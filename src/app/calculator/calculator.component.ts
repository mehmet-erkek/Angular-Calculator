import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  visibleSidebar : boolean = true;
  value1: number = 0;

  openCalculator(){
    this.visibleSidebar = true;
  }
  Closed(){}
}
