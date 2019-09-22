import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private http: Http
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: [null],
      cpf: [null],
      phone: [null],
      email: [null],
      password: [null],
      cep: [null],
      publicPlace: [null],
      numberAddress: [null],
      neighborhood: [null]
    });
  }

  onSubmit() {
    console.log(this.form);

    // this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
    // .map(res => res)
    // .subscribe(data => console.log(data));
  }


}
