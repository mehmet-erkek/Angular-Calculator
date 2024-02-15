import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  visibleSidebar : boolean = true;
  value1 = '0';
  firstValue: number | null = null;
  action: string | null = null;

  openCalculator(){
    this.visibleSidebar = true;
  }

  numClick(val:any) {
    if (this.value1 === '0') {
      this.value1 = val.toString();
    } else {
      this.value1 = `${this.value1}${val}`;
    }
  }

  oper(action:any) {
    this.firstValue = parseFloat(this.value1);
    this.action = action;
    this.value1 = ' ';
  }

  calculate() {
    let a : any = this.firstValue;
    let b : any = parseFloat(this.value1);

    let result : any;
    if (this.action === 'm') {
      result = a * b;
    }
    else if (this.action === 'd') {
      result = a / b;
    }
    else if (this.action === 'a') {
      result = a + b;
    }
    else if (this.action === 's') {
      result = a - b;
    }

    this.firstValue = result;
    this.value1 = result.toString();
  }

  Closed(){}
}
