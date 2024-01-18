import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //String implementation
  position="Student";
  work_experience = "10 years";
  email = 'daryllmedina6@gmail.com';
  website = 'www.thereal.com';
  phone = '879-324-9852';

  //image interpolation/binding
  imageURL ="assets/profile.jpg"
  imageW: number = 110;
  imageH: number = 110;
}
