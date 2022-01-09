import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroupDirective,
  ValidatorFn
} from "@angular/forms";

@Component({
  selector: 'lazy-single-file-input',
  templateUrl: './lazy-single-file-input.component.html',
  styleUrls: ['./lazy-single-file-input.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }]
})
export class LazySingleFileInputComponent implements OnInit {
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

  selectedFile: File;
  selectedFileName: File;
  control: AbstractControl | null | undefined;
  validators: ValidatorFn[] = [];
  errorMessage: string;

  constructor(
    private controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this.control = this.controlContainer.control?.get(this.controlName);
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.selectedFileName = <File>event.target.files[0]?.name;
  }
}
