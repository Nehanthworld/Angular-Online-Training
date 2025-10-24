import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PasswordPolicyValidator } from '../../shared/validators/password-policy.validator';
import { PasswordMatchValidator } from '../../shared/validators/password-match.validator';
import { UsernameCheckValidator } from '../../shared/validators/username-check.validator';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  @ViewChild('myForm') myForm!: NgForm;

  templateModel: any = {
    name: '',
    age: 0,
    gender: '',
    country: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    address: {
      address: '',
      city: '',
      pincode: ''
    },
    acceptTerms: false
  }
  //signupForm: any;
  constructor(private accountService: AccountService) {
    // this.signupForm = new FormGroup(
    //   {
    //   name: new FormControl<string>('', Validators.required),
    //   age: new FormControl<number>(0, [Validators.required, Validators.min(18)]),
    //   gender: new FormControl<string>('', [Validators.required]),
    //   country: new FormControl<string>('', [Validators.required]),
    //   email: new FormControl<string>('', [Validators.required]),
    //   username: new FormControl<string>('', {
    //     validators: [Validators.required],
    //     asyncValidators: [UsernameCheckValidator(accountService)]
    //   }),
    //   password: new FormControl<string>('', [
    //     Validators.required, 
    //     Validators.minLength(6), 
    //     PasswordPolicyValidator()
    //   ]),
    //   confirmPassword: new FormControl<string>('', [
    //     Validators.required, 
    //     Validators.minLength(6), 
    //     PasswordPolicyValidator()
    //   ]),
    //   address: new FormGroup({
    //     address: new FormControl<string>('', [Validators.required]),
    //     city: new FormControl<string>('', [Validators.required]),
    //     pincode: new FormControl<string>('', [Validators.required]),
    //   }),
    //   acceptTerms: new FormControl<boolean>(false, [Validators.requiredTrue])
    // }, {
    //   validators: PasswordMatchValidator()
    // });
  }

  saveUser(form: NgForm) {
    console.log("User Signup Data: ", form.value);
    //console.log("User Signup Data: ", this.signupForm.value);
  }
  getDataFromDb(){
    //We got the data from db
    //so update the form
    let dbData = {};
    this.updateValues(dbData);
  }
  setDefaultValues(form?: NgForm) {
    if (form)
      form.setValue({
        name: 'Default Name',
      })
    else {
      this.myForm.setValue({
        name: 'Default Name',
      });
    }
  }
  updateValues(dbData: any) {
    this.myForm.form.patchValue({
      name: dbData.name,
      age: dbData.age,
    })
  }
}
