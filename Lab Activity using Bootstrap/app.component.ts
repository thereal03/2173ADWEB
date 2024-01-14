import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_data_binding';
  brand = "iGadget Haven"; //property
  appliedCSS = "red"; //style
  notAppliedCSS = false;
  myColor = "white";

  clickCount = 0
  clickMe(){
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount=0;
  }
}