import { Component, OnInit } from '@angular/core';
//importamos a forms
import { FormControl, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  nameField: FormControl;
  emailField: FormControl;
  mensajeField: FormControl;
  constructor() {
    this.nameField=new FormControl(
      'Your Name', 
      [
        Validators.required,
        //valores minimos y maximos del campo de email
        Validators.minLength(4), 
        Validators.maxLength(10)
      ]
      );
    this.emailField=new FormControl(
      'example@example', 
      [
        Validators.required,
        //valores minimos y maximos del campo de email
        Validators.minLength(4), 
        Validators.maxLength(10)
      ]
      );
    this.mensajeField=new FormControl(
      'Your Message', 
      [
        Validators.required,
        //valores minimos y maximos del campo de email
        Validators.minLength(4), 
        Validators.maxLength(50)
      ]
      );
      //escuchamos el cambio dinamicamente
    this.emailField.valueChanges.subscribe(value=>{
      console.log(value);
    })
    // this.emailField
   }

  ngOnInit(): void {
    
  }
  sendContact(){
    if(this.emailField.valid && this.nameField.valid && this.mensajeField.valid ){
      alert("Mensaje enviado"); 
    }
  }

}
