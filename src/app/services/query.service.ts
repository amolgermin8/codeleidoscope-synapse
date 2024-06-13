import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

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
    const url = "http://localhost:8080/synapse/interaction/search";
    


    return this.http.get(url, { params: { query } }).pipe(
      map(response => {
        console.log(response);
        return response.toString();
      }),
      catchError(error => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }

  // searchPostMethod(query: string) {
  //   const url = "http://localhost:8080/synapse/interaction/search";
  //   return this.http.post(url, { query }).pipe(
  //     map(response => {
  //       console.log(response);
  //       return response.toString();
  //     }),
  //     catchError(error => {
  //       console.error('Error fetching data:', error);
  //       throw error;
  //     })
  //   );
  // }

}
