import {NgModule} from '@angular/core';
import {LazyUiComponent} from './lazy-ui.component';
import {LazyInputComponent} from "./components/inputs/lazy-input/lazy-input.component";
import {CommonModule} from "@angular/common";
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {NumbersOnlyDirective} from "./directives/numbers-only/numbers-only.directive";
import {PhoneNumberDirective} from "./directives/phone-number/phone-number.directive";
import {LzyButtonComponent} from "./components/buttons/lzy-button/lzy-button.component";
import {LazyEmailInputComponent} from "./components/inputs/lazy-email-input/lazy-email-input.component";
import {LazyPhoneInputComponent} from "./components/inputs/lazy-phone-input/lazy-phone-input.component";
import {LazyEmailDirective} from "./directives/lazy-email/lazy-email.directive";

@NgModule({
  declarations: [
    LazyUiComponent,
    LazyInputComponent,
    NumbersOnlyDirective,
    PhoneNumberDirective,
    LzyButtonComponent,
    LazyEmailDirective,
    LazyPhoneInputComponent,
    LazyEmailInputComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormGroupDirective,
    LazyInputComponent
  ],
  exports: [
    LazyUiComponent,
    LazyEmailInputComponent,
    LazyInputComponent,
    LazyPhoneInputComponent,
    LazyEmailDirective,
    NumbersOnlyDirective,
    LzyButtonComponent,
    PhoneNumberDirective
  ]
})
export class LazyUiModule { }
