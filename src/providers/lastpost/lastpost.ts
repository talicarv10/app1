import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the LastpostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LastpostProvider {

   baseApiPath = "http://aulas2.getsandbox.com";

  constructor(public http: HttpClient, public toastController: ToastController, public loadingController: LoadingController) {
    console.log('Hello LastpostProvider Provider');
  }

getLastpost(){
  return new Promise ((resolve, reject) => {
    this.http.get(this.baseApiPath + "/last_post").subscribe(res => {
      resolve(res);
    }, (err) =>{
       reject(err);
    });
});
}



}
