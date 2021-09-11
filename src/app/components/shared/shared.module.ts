import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { SumaPipePipe } from './pipes/suma/suma-pipe.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ExponentialPipe, SumaPipePipe, HighlightDirective, FooterComponent, HeaderComponent],
  exports: [ExponentialPipe, SumaPipePipe, HighlightDirective, FooterComponent, HeaderComponent],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
