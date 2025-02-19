import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarriageService {

  constructor(private http: HttpClient) { }

 loadMaleDetails(gender:string ): Observable<any>{
 
  let url = 'https://randomuser.me//api?gender=male';

  return this.http.get(url);
  
 }   

 loadFemaleDetails(gender:string ): Observable<any>{
 
  let url = 'https://randomuser.me//api?gender=female';

  return this.http.get(url);
  
 }   

  };

