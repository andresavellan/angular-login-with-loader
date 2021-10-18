import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  //RXJS
  // registerUsers(newUser:object){

  //   return this.http.post('http://localhost:3000/users', newUser)
  //     .pipe(
  //       catchError(this.handleError)
  //     );

  // }

  // handleError(error: HttpErrorResponse): any {
  //   if(error instanceof HttpErrorResponse){
  //     //Serverside Error
  //     return throwError('Serverside Error: ' + error.message)
  //   } else {
  //     //Client Error
  //     return throwError('Client Error: ' + error)
  //   }
    
  // }

// JS ASYNC AWAIT
  async registerUsers(newUser:any) {
    let response = await fetch('http://localhost:3000/users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
      })
    if (!response.ok) {
      return throwError(`HTTP error! status: ${response.status}`);
    }
    return await response.json()
  }
}
