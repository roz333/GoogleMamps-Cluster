import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppendixAService {

  url: string;


  constructor(private httpClient: HttpClient) {
    this.url = 'https://glacial-escarpment-40412.herokuapp.com/users';
  }
  getLocationList(): Observable<any> {
    return this.httpClient.get<string>(`${this.url}`);
  }

}
