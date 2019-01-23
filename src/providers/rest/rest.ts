import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://aulas2.getsandbox.com';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  saveUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/login', data).subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
    }

  

}
