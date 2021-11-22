import {NgModule} from '@angular/core';
import {LazyUiComponent} from './lazy-ui.component';
import {LazyInputComponent} from "./components/inputs/lazy-input/lazy-input.component";
import {CommonModule} from "@angular/common";
import {FormGroupDirective, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {NumbersOnlyDirective} from "./directives/numbers-onley/numbers-only.directive";
import {PhoneNumberDirective} from "./directives/phone-number/phone-number.directive";
import {LzyButtonComponent} from "./components/buttons/lzy-button/lzy-button.component";
import {EmailDirective} from "./directives/email/email.directive";
import {LazyEmailInputComponent} from "./components/inputs/lazy-email-input/lazy-email-input.component";

@NgModule({
  declarations: [
    LazyUiComponent,
    LazyInputComponent,
    NumbersOnlyDirective,
    PhoneNumberDirective,
    LzyButtonComponent,
    LazyEmailInputComponent,
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
    NumbersOnlyDirective,
    PhoneNumberDirective,
    LazyInputComponent,
  ],
  exports: [
    LazyUiComponent,
    LazyEmailInputComponent,
    LazyInputComponent,
    NumbersOnlyDirective,
    LzyButtonComponent,
    PhoneNumberDirective
  ]
})
export class LazyUiModule { }
