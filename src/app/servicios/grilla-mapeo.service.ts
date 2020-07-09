import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrillaMapeoService {

  private endPoint = 'http://zwastest13.cadm.pjud:9081/MigraREST/migra/getBuscarColsU';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Credentials': 'true',
      "Access-Control-Allow-Headers" : "DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization"
   }),
  };


  constructor(private http: HttpClient) {
  }

  public cargaGrillaTabla(codCompetencia, tablaSel): Observable<any> {
    this.httpOptions.headers.append("Access-Control-Allow-Methods", "GET");
    this.httpOptions.headers.append("Access-Control-Allow-Origin", "*");
    console.log(tablaSel); // log to console instead

    return this.http.get<any>(this.endPoint + '/' + codCompetencia + '/' + tablaSel).pipe(
      tap(() => { }
      ),
      catchError(
        this.handleError<any>()
      )
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
