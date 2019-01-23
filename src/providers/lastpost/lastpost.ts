import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LastpostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LastpostProvider {

   baseApiPath = "http://aulas2.getsandbox.com";

  constructor(public http: HttpClient) {
    console.log('Hello LastpostProvider Provider');
  }

getLastpost(){
  return this.http.get(this.baseApiPath + "/last_post");
  
}

}
