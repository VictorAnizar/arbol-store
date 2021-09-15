import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Boton
import { MatButtonModule } from '@angular/material/button';
//Input
import { MatInputModule } from '@angular/material/input';
//toolbar
import { MatToolbarModule } from '@angular/material/toolbar';
//menu
import { MatMenuModule } from '@angular/material/menu';
//icons
import { MatIconModule } from '@angular/material/icon';
//badge (contador)
import { MatBadgeModule } from '@angular/material/badge';
//cards
import { MatCardModule } from '@angular/material/card';

//generados por schematic
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
// import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatInputModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule, MatCardModule,
    MatSelectModule,
    MatRadioModule
  ],
  exports: [MatButtonModule, MatInputModule, MatToolbarModule, MatMenuModule, MatIconModule, MatBadgeModule, MatCardModule
  , MatSelectModule, MatRadioModule]
})
export class MaterialModule { }
