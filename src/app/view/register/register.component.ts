import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';
import { ToastrService } from 'ngx-toastr';
import { MaskService } from '../../services/mask.service';
import { CepService } from '../../services/cep/cep.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  foundPostalCode = false;

  public cpfMask = MaskService.cpfMask;
  public phoneMask = MaskService.phoneMask;

  constructor(
    private cepService: CepService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      cpf: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cep: [''],
      publicPlace: [''],
      number: [''],
      neighborhood: ['']
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

  searchAddress(event: any) {
    if (event.target.value && event.target.value.length === 8)
      this.cepService
        .searchAddressByPostalCode(event.target.value)
        .subscribe((response) => this.populateForm(response));
  }

  populateForm(model: any) {
    this.foundPostalCode = true;
    this.form.patchValue({
      publicPlace: model.logradouro,
      neighborhood: model.bairro,
    }, { onlySelf: true });
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
              (key + ' é obrigatório')
              );
          });
        }
      }
    });
  }
}






