import {Component, Input, OnInit} from '@angular/core';
import {File} from "@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system";
import {AbstractControl, ControlContainer, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'lazy-file-input',
  templateUrl: './lazy-file-input.component.html',
  styleUrls: ['./lazy-file-input.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }]
})
export class LazyFileInputComponent implements OnInit {
  @Input() controlName: string
  @Input() buttonLabel: string;
  @Input() btnEnabled: boolean = true;
  @Input() matIcon: string;

  selectedFile: File;
  selectedFileName: File;
  control: AbstractControl | null | undefined;

  constructor(
    private controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this.control = this.controlContainer.control?.get(this.controlName);
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.selectedFileName = <File>event.target.files[0].name;
  }
}
