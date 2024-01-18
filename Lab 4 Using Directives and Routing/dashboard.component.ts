import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }
  staff = [ 
    { firstName: 'Daryll', lastName: 'Medina', email: 'daryll.medina@test.com', role: 'Admin' },   
    { firstName: 'Miguel', lastName: 'Enriquez', email: 'miguel.enriquez@test.com', role: 'AUser' }, 
    { firstName: 'Aron', lastName: 'Layson', email: 'aron.layson@test.com', role: 'Admin' }, 
    { firstName: 'Miguel', lastName: 'Lee', email: 'miguel.lee@test.com', role: 'User' }, 
    { firstName: 'Kenj', lastName: 'Jaculbia', email: 'kenj.jaculbia@test.com', role: 'User' } 
    ];
}
