import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Boton
import {MatButtonModule} from '@angular/material/button';
//Input
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatInputModule
  ],
  exports: [MatButtonModule, MatInputModule]
})
export class MaterialModule { }
