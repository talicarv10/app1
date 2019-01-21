import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ListmsgsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListmsgsProvider {



  apiUrl = 'http://aulas.getsandbox.com';

  constructor(public http: HttpClient) {
    console.log('Hello ListmsgsProvider Provider');
  }


  getMsgs(id) {
    
    return this.http.get(this.apiUrl+'/msgs/'+ id)

}
}
