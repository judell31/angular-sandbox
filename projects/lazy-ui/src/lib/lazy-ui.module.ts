import {NgModule} from '@angular/core';
import {LazyInputComponent} from "./components/inputs/lazy-input/lazy-input.component";
import {CommonModule} from "@angular/common";
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NumbersDirective} from "./directives/numbers/numbers.directive";
import {PhoneNumberDirective} from "./directives/phone-number/phone-number.directive";
import {LzyButtonComponent} from "./components/buttons/lzy-button/lzy-button.component";
import {LzyEmailDirective} from "./directives/lzy-email/lzy-email.directive";
import { LzyNextStepperButtonComponent } from './components/buttons/lzy-next-stepper-button/lzy-next-stepper-button.component';
import { LzyBackStepperButtonComponent } from './components/buttons/lzy-back-stepper-button/lzy-back-stepper-button.component';
import {MaterialModule} from "./material.module";
import {LazyPhoneInputComponent} from "./components/inputs/lazy-phone-input/lazy-phone-input.component";
import {LazyNumberInputComponent} from "./components/inputs/lazy-number-input/lazy-number-input.component";
import {LazyDropDownComponent} from "./components/inputs/lazy-drop-down/lazy-drop-down.component";

@NgModule({
  declarations: [
    LazyInputComponent,
    LzyButtonComponent,
    LzyEmailDirective,
    PhoneNumberDirective,
    NumbersDirective,
    LazyPhoneInputComponent,
    LazyNumberInputComponent,
    LazyDropDownComponent,
    LzyNextStepperButtonComponent,
    LzyBackStepperButtonComponent,
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
    LzyEmailDirective,
    PhoneNumberDirective,
    NumbersDirective,
    LazyPhoneInputComponent,
    LazyNumberInputComponent,
    LazyDropDownComponent,
    LzyButtonComponent,
    LzyNextStepperButtonComponent,
    LzyBackStepperButtonComponent,
  ]
})
export class LazyUiModule { }
