import { Component, getNgModuleById, OnInit } from '@angular/core';
import { MarriageService } from './marriage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  DetailsMale : 
    {
      name: {title: string, first: string, last:string},
      picture: { large:string, medium: string, thumbnail: string},
      dob:{date: string, age: string},
      email:string,
      location: {city:string, country :string, street:{ number: string, name: string}},
      phone: string,
      gender: string,
    }[] = []

    DetailsFemale : 
    {
      name: {title: string, first: string, last:string},
      picture: { large:string, medium: string, thumbnail: string},
      dob:{date: string, age: string},
      email:string,
      location: {city:string, country :string, street:{ number: string, name: string}},
      phone: string,
      gender: string,
    }[] = []
    
constructor (private marriageservice : MarriageService) {}

ngOnInit(): void {
 
    this.marriageservice.loadMaleDetails('male').subscribe(data => {
       this.DetailsMale =  data.results;
       console.log(this.DetailsMale)
    });
   

    this.marriageservice.loadFemaleDetails('female').subscribe(data => {
      this.DetailsFemale =  data.results;
      console.log(this.DetailsFemale)
   });
    }
  };
