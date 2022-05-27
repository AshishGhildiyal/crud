import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crude',
  templateUrl: './crude.component.html',
  styleUrls: ['./crude.component.css'],
})
export class CrudeComponent implements OnInit {
  takedata: any = [];
  currentindex = -1;
  url = '';

  myform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
    ur: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.currentindex == -1) {
      this.myform.value.url = this.url;
      this.takedata.push(this.myform.value);
      this.reset();
    } else {
      this.takedata[this.currentindex] = this.myform.value;
      this.currentindex = -1;
      console.log(this.takedata);
      this.reset();
    }
  }

  delete(id: number) {
    this.takedata.splice(id, 1);
    // let remove = { id };
  }

  update(showdata: any, id: any) {
    this.myform.patchValue(showdata);
    this.currentindex = id;
  }

  reset() {
    this.myform.reset();
  }

  selectfile(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
}
