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
//expansion
import {MatExpansionModule} from '@angular/material/expansion';
//pestañas
import {MatTabsModule} from '@angular/material/tabs';


//generados por schematic
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatTabsModule   
  ],
  exports: [
    MatButtonModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatMenuModule, 
    MatIconModule, 
    MatBadgeModule, 
    MatCardModule, 
    MatSelectModule, 
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, 
    MatExpansionModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
