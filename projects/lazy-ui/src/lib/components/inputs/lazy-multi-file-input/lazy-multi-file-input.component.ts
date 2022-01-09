import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer, FormGroupDirective, ValidatorFn} from "@angular/forms";

@Component({
  selector: 'lazy-multi-file-input',
  templateUrl: './lazy-multi-file-input.component.html',
  styleUrls: ['./lazy-multi-file-input.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }]
})
export class LazyMultiFileInputComponent implements OnInit {
  @Input() controlName: string
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;
  @Input() matIcon: string;
  @Input() style: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() maxFileSize: number;
  @Input() maxSizeDescription: string;
  @Input() fileType: string;
  @Input() triggerFileSelectFunc: Function;
  @Input() selectedFileArray: File[] = [];

  control: AbstractControl | null | undefined;
  validators: ValidatorFn[] = [];
  errorMessage: string;

  constructor(
    private controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this.control = this.controlContainer.control?.get(this.controlName);
  }

  triggerFileSelect(event: any) {
    this.triggerFileSelectFunc(event);
  }
}
