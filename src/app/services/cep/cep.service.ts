import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  constructor(private http: HttpClient) { }

  searchAddressByPostalCode(postalCode: string) {
    postalCode = postalCode.replace(/\D/g, '');
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws/${postalCode}/json/`
    );
  }
}
