import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITechnologie } from '../interfaces/technologie.interface';

@Injectable({
  providedIn: 'root'
})

export class TechnologiesService {

  url: string = "http://localhost:9090/api/technologies";

  constructor(
    private http: HttpClient
  ) { }

  getListTechnologies() {
    return this.http.get<Array<ITechnologie>>(this.url);
  }

  // addPerson(p: Personne) {
  //   return this.http.post(this.url, p);
  // }
}
