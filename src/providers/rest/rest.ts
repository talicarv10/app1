import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  photo: string = null;

  apiUrl = 'http://aulas2.getsandbox.com';

  constructor(public http: HttpClient, public toastController: ToastController, public loadingController: LoadingController) {
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

    getFotoAvatar(){
      return this.photo;
    }

    setFotoAvatar(img){
      return this.photo = img;
    }
  

}
