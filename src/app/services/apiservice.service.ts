import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiserviceService {

  constructor(private http: HttpClient) { }


  // GET request
  getTest(query: string): Observable<any> {
    console.log('Third party call service called');
    const url = "http://localhost:8080/synapse/interaction/search/test?query=" + query;


    return this.http.get<any>(url );
  }
}