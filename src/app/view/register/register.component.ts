import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';
import { ToastrService } from 'ngx-toastr';
import { MaskService } from '../../services/mask.service';
import { Cep } from '../../services/cep/cep';
import { CepService } from '../../services/cep/cep.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  public cpfMask = MaskService.cpfMask;
  public phoneMask = MaskService.phoneMask;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private cepService: CepService

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
      number: [null, Validators.required],
      neighborhood: [null, Validators.required]
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    if (this.form.valid) {
      this.toastr.success(
        'Casdastro realizado com sucesso!'
      );
      return this.router.navigate(['/login']);
    } else {
      this.showFormErrors(this.form);
    }
  }

  showFormErrors(group: FormGroup) {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.controls[key];
      const controlErrors: ValidationErrors = group.get(key).errors;
      if (abstractControl instanceof FormGroup) {
        this.showFormErrors(abstractControl);
      } else {
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            this.toastr.error(
              'Campos Obrigatórios'
              // this.translate.instant('fields.' + key),
              // this.translate.instant('errors.' + keyError)
            );
          });
        }
      }
    });
  }

  // searchAddress() {
  //   // if (event.target.value && event.target.value.length === 8)
  //   //   this.cepService
  //   //     .searchAddressByPostalCode(event.target.value)
  //   //     .subscribe((response) => this.populateForm(response));

  //   const cep = this.form.get('address.cep').value;

  //   if(cep != null && cep !== '') {
  //     this.cepService.searchAddressByPostalCode(cep)
  //     .subscribe(dados => this.populateForm(dados));
  //   }
  // }

  // populateForm(dados) {
  //   // this.foundPostalCode = true;
  //   this.form.patchValue({
  //     address: {
  //       publicPlace: dados.publicPlace,
  //       neighborhood: dados.neighborhood
  //     }
  //   }, { onlySelf: true });
  // }

  // resetDadosForm() {
  //   this.form.patchValue({
  //     address: {
  //       publicPlace: null,
  //       neighborhood: null,
  //     }
  //   });
  // }

}






