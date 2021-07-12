import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {IOption} from 'ng-select';

@Injectable({
  providedIn: 'root'
})

export class HospedeService {
  
  constructor(private http: HttpClient) { }

  createResult: boolean;
  content: [];

  form = new FormGroup({
    // $key: new FormControl(null),
    nome: new FormControl('', Validators.required),
    documento: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required)
  });

  getHospedes(){
    return this.http.get('https://lhr-desafio-hotel.herokuapp.com/hospedes');
  }

  getHospede(id:BigInteger){
    return this.http.get('https://lhr-desafio-hotel.herokuapp.com/hospedes/' + id);
  }

  postHospede(form){
    return this.http.post('https://lhr-desafio-hotel.herokuapp.com/hospedes', form).subscribe(
      data => {
        console.log("post request is successful", data);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
