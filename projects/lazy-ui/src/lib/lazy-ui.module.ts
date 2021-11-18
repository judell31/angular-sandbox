import {NgModule} from '@angular/core';
import {LazyUiComponent} from './lazy-ui.component';
import {LazyInputComponent} from "./components/inputs/lazy-input/lazy-input.component";
import {CommonModule} from "@angular/common";
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {NumbersOnlyDirective} from "./directives/numbers-onley/numbers-only.directive";
import {PhoneNumberDirective} from "./directives/phone-number/phone-number.directive";
import {EmailDirective} from "./directives/email/email.directive";

@NgModule({
  declarations: [
    LazyUiComponent,
    LazyInputComponent,
    NumbersOnlyDirective,
    PhoneNumberDirective,
    EmailDirective
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormGroupDirective,
    // EmailDirective,
    // NumbersOnlyDirective,
    // PhoneNumberDirective
  ],
  exports: [
    LazyUiComponent,
    LazyInputComponent,
    EmailDirective,
    NumbersOnlyDirective,
    PhoneNumberDirective
  ]
})
export class LazyUiModule { }
