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
import {LzyEmailDirective} from "./directives/lzy-email/lzy-email.directive";

@NgModule({
  declarations: [
    LazyInputComponent,
    LzyButtonComponent,
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
  ],
  exports: [
    LazyEmailInputComponent,
    LazyInputComponent,
    LazyPhoneInputComponent,
    LzyButtonComponent,
  ]
})
export class LazyUiModule { }
