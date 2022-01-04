import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  inputFormGroup: FormGroup;
  arrayList: any[];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.inputForm();

    this.arrayList = [
      {
        name: "Item 1"
      },
      {
        name: "Item 2"
      },
      {
        name: "Item 3"
      },
      {
        name: "Item 4"
      },
      {
        name: "Item 5"
      },
      {
        name: "Item 6"
      }
    ]
  }

  inputForm() {
    this.inputFormGroup = this.formBuilder.group({
      email: new FormControl(''),
      firstName: new FormControl('')
    });
  }
}
