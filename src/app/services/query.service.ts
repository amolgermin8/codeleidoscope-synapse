import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private http: HttpClient
  ) { }

  // api call to backend to send POST request
  // {
  //   query:string
  // }

  sendQuery(query: string) {
    const url = 'your-backend-api-endpoint';
    const data = { query: query };

    return this.http.post(url, data);
  }

}
