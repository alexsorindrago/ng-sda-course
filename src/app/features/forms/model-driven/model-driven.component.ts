import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Language } from 'src/app/shared/models/language.model';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  public registrationForm: FormGroup;

  public languages: Language[] = [
    { value: 'ro', viewValue: 'Romanian' },
    { value: 'en', viewValue: 'English' },
    { value: 'ge', viewValue: 'German' }];


  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({

      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()

    });
  }

  public onSubmit(): void {
    console.log('Submit');
    this.toastr.success('form submitted');
  }

  public onCancel(): void {
    console.log('Cancelled');
    this.toastr.error('form cancelled');
  }

}
