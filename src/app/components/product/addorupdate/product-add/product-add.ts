import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.html',
  styleUrl: './product-add.css'
})
export class ProductAdd implements OnInit {
  productForm: any;
  constructor() {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      id: new FormControl(0),
      releaseDate: new FormControl(''),
      price: new FormControl(0),
      description: new FormControl(''),
      starRating: new FormControl(0),
      imageUrl: new FormControl('')
    });
  }
  //productName = new FormControl('This is initial val');
  //sampleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  ngOnInit(): void {
    // this.productName.valueChanges.subscribe(val => {
    //   console.log("Product Name Changed: ", val);
    // });
    // this.productName.setValue("New value");
    this.productForm.controls.productName.valueChanges.subscribe((val: any) => {
      console.log("Product Name Changed: ", val);
    });
    //Full form update
    this.productForm.setValue({
      productName: 'New Product Name'
      , id: 1//have to provide all values
    });
    //Partial update
    this.productForm.patchValue({
      productName: 'New Product Name', id : 8
    });
    this.productForm.controls.productName.setValue("Updated Product Name");
    console.log("This is from inint");
  }
  subscribeToValueChanges() {
    // this.sampleSubject.subscribe(val => {
    //   console.log("Subject Value: ", val);
    // });

  }
  saveProduct() {
    //console.log("Product Name: ", this.productName.value);
    console.log("Product group value: ", this.productForm.value);
    console.log("Product name value: ", this.productForm.value.productName);
    console.log("Product name value: ", this.productForm.controls.productName.value);
  }
}
