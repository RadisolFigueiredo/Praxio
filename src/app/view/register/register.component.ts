import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      cpf: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cep: [null, Validators.required],
      publicPlace: [null, Validators.required],
      numberAddress: [null, Validators.required],
      neighborhood: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value))
    .subscribe(data => {
      console.log(data);
      this.form.reset();
    },
    (error: any) => console.log(error));
  }


}
