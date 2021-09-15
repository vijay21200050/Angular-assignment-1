import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IData } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getemp(): Observable<IData[]>{
    return this.http.get<IData[]>(this._url);
  }
}
