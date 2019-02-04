import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';


/*
  Generated class for the ListmsgsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListmsgsProvider {



  apiUrl = 'http://aulas2.getsandbox.com';

  constructor(public http: HttpClient, public toastController: ToastController, public loadingController: LoadingController) {
    console.log('Hello ListmsgsProvider Provider');
  }


  getMsgs(id) {
    
    return new Promise ((resolve, reject) => {
      this.http.get(this.apiUrl+'/msgs/'+ id).subscribe(res => {
        this.presentLoading(res);
        resolve(res);
      }, (err) => {
        this.msgsToast(err);
        reject(err);
      });
  });
}

async msgsToast(err: any) {
  const toast = await this.toastController.create({
    message: 'Erro!',
    duration: 4000
  });
  toast.present();
}

async presentLoading(res: any) {
  const loading = await this.loadingController.create({
    duration: 1000
  });
  return await loading.present();
}



}