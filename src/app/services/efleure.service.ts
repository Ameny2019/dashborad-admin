import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EfleureService {

  constructor(private http: HttpClient) { }

    getfleurs(){
      return this.http.get(`http://localhost:3000/efleur/GetAllEfleur/`)
    }
}
