import {NgModule} from '@angular/core';
import {LazyInputComponent} from "./components/inputs/lazy-input/lazy-input.component";
import {CommonModule} from "@angular/common";
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PhoneNumberDirective} from "./directives/phone-number/phone-number.directive";
import {LzyButtonComponent} from "./components/buttons/lzy-button/lzy-button.component";
import {LzyEmailDirective} from "./directives/lzy-email/lzy-email.directive";
import {MaterialModule} from "./material.module";
import {LazyPhoneInputComponent} from "./components/inputs/lazy-phone-input/lazy-phone-input.component";
import {NumbersDirective} from "./directives/numbers/numbers.directive";
import {LazyDropDownComponent} from "./components/inputs/lazy-drop-down/lazy-drop-down.component";
import {LzyNextStepperButtonComponent} from "./components/buttons/lzy-next-stepper-button/lzy-next-stepper-button.component";
import {LzyBackStepperButtonComponent} from "./components/buttons/lzy-back-stepper-button/lzy-back-stepper-button.component";
import {LazyNumberInputComponent} from "./components/inputs/lazy-number-input/lazy-number-input.component";

@NgModule({
  declarations: [
    LazyInputComponent,
    LzyButtonComponent,
    LzyEmailDirective,
    LazyPhoneInputComponent,
    PhoneNumberDirective,
    NumbersDirective,
    LazyNumberInputComponent,
    LazyDropDownComponent,
    LzyNextStepperButtonComponent,
    LzyBackStepperButtonComponent
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
    LazyPhoneInputComponent,
    LazyDropDownComponent,
    LzyButtonComponent,
    LazyNumberInputComponent,
    PhoneNumberDirective,
    NumbersDirective,
    LzyNextStepperButtonComponent,
    LzyBackStepperButtonComponent,
  ]
})
export class LazyUiModule { }
