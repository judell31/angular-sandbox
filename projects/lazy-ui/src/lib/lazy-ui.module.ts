import {NgModule} from '@angular/core';
import {LazyInputComponent} from "./components/inputs/lazy-input/lazy-input.component";
import {CommonModule} from "@angular/common";
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PhoneNumberDirective} from "./directives/phone-number/phone-number.directive";
import {LazyButtonComponent} from "./components/buttons/lazy-button/lazy-button.component";
import {LazyEmailDirective} from "./directives/lazy-email/lazy-email.directive";
import {MaterialModule} from "./material.module";
import {NumbersDirective} from "./directives/numbers/numbers.directive";
import {LazyDropDownComponent} from "./components/inputs/lazy-drop-down/lazy-drop-down.component";
import {LazyNextStepperButtonComponent} from "./components/buttons/lazy-next-stepper-button/lazy-next-stepper-button.component";
import {LazyBackStepperButtonComponent} from "./components/buttons/lazy-back-stepper-button/lazy-back-stepper-button.component";
import {LazyNumberInputComponent} from "./components/inputs/lazy-number-input/lazy-number-input.component";
import {LazySingleFileInputComponent} from "./components/inputs/lazy-single-file-input/lazy-single-file-input.component";

@NgModule({
  declarations: [
    LazyInputComponent,
    LazyButtonComponent,
    LazyEmailDirective,
    LazyNumberInputComponent,
    PhoneNumberDirective,
    LazySingleFileInputComponent,
    NumbersDirective,
    LazyDropDownComponent,
    LazyNextStepperButtonComponent,
    LazyBackStepperButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    FormGroupDirective,
  ],
  exports: [
    LazyInputComponent,
    LazyEmailDirective,
    LazyDropDownComponent,
    LazyButtonComponent,
    LazyNumberInputComponent,
    LazyNumberInputComponent,
    PhoneNumberDirective,
    LazySingleFileInputComponent,
    NumbersDirective,
    LazyNextStepperButtonComponent,
    LazyBackStepperButtonComponent,
  ]
})
export class LazyUiModule { }
