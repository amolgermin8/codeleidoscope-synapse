import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable()
export class QueryService {

  constructor(
    private http: HttpClient
  ) { }

  sendQuery(query: string): Observable<any> {
    const url = "http://localhost:8080/synapse/trooya/search?query="+query;
    
    // return this.http.get<string>(url, { params: { query } });
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(response => {
          // Assuming the response is JSON formatted string, we need to parse it
          console.log(response);
          return response;
      }),
      catchError(error => {
          console.error('Error fetching data:', error);
          throw error;
      })
  );
    // .pipe(
    //   map(response => {
    //     console.log(response);
    //     return response;
    //   }),
    //   catchError(error => {
    //     console.error('Error fetching data:', error);
    //     throw error;
    //   })
    // );
  }

}
