import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersOnlyDirective } from './directives/numbers-only-directive';
import { ShowPasswordDirective } from './directives/show-password.directive';


const directives = [NumbersOnlyDirective, ShowPasswordDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
