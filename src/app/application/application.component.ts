import { Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms';
import {UsernameValidationService} from '../services/username-validation.service';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  positions:String[]=['JR .NET Developer', 'Middle .NET developer', 'JR. Angular Developer', 'Team lead of Angular', 'Team lead of .NET'];
  
  

  applicantForm=this.fb.group({

    firstName:["",[Validators.required,Validators.minLength(2)]],
    lastName:["",Validators.required],
    gender:[""],
    phoneNumber:["",Validators.required],
    dateOfBirth:[""],
    position:[""],
    address:this.fb.group({
      city:[""],
      street:[""],
      postal:[""]
    }),
    alternateEmails: this.fb.array([]),
    subscribe:[],
    email:[],


  },{
    validator:this.customValidator.usernameValidator()
  })


  getEmailControls() {
    return (this.applicantForm.get('alternateEmails') as FormArray).controls;
  }

  
  addAlternateEmail() {
    const alternateEmails = this.applicantForm.get('alternateEmails') as FormArray;
    alternateEmails.push(this.fb.control(''));
  }


  fillAddress(){
    this.applicantForm.patchValue({
      address:{
        city:"Tbilisi",
        street:"Feradze street #4",
        postal:'1121',
        
      }
    })
  }

  
  constructor(private fb:FormBuilder, private customValidator:UsernameValidationService ){}

  
  

}
