import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { SumaPipePipe } from './pipes/suma/suma-pipe.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { ServicioCardComponent } from './components/servicio-card/servicio-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MealCardComponent } from './components/meal-card/meal-card/meal-card.component';
@NgModule({
  declarations: [ExponentialPipe,ServicioCardComponent,ProductComponent, SumaPipePipe, HighlightDirective, FooterComponent, HeaderComponent, MealCardComponent],
  exports: [ExponentialPipe, ProductComponent,ServicioCardComponent,SumaPipePipe, HighlightDirective, FooterComponent, HeaderComponent, MealCardComponent],
  imports: [
    CommonModule, RouterModule, MaterialModule
  ]
})
export class SharedModule { }
