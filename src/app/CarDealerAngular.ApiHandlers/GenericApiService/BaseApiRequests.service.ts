import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {catchError, Observable, throwError} from "rxjs";

@Injectable()

export class BaseApiRequestsService{
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  get<T>(url: string){
    return this.http.get<T>(`${this.apiUrl}/${url}`).pipe(catchError(this.formatErrors));
  }
  post<T>(url: string, body: any): Observable<T>{
    return this.http.post<T>(`${this.apiUrl}/${url}`, body).pipe(catchError(this.formatErrors));
  }

  delete<T>(url: string){
    return this.http.delete<T>(`${this.apiUrl}/${url}`).pipe(catchError(this.formatErrors));
  }

  put<T>(url: string, body: any): Observable<T>{
    return this.http.put<T>(`${this.apiUrl}/${url}`, body).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any): Observable<any> {
    console.log(error);
    return throwError(error.error);
  }
}
