import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnapp';
  x : number = 10
  y : number = 20
  inputNumber : number = 4;

  public product() : number {
    return this.x * this.y;
  }

  public factorial(n: number) : number {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  public calculateFactorial(): number {
    return this.factorial(this.inputNumber);
  }
}