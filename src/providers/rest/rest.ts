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
          this.presentLoading(res);
          this.confirmToast(res);
          resolve(res);
        }, (err) => {
          this.loginToast(err);
          reject(err);
        });
    });
    }

    async presentLoading(res: any) {
      const loading = await this.loadingController.create({
        duration: 1000
      });
      return await loading.present();
    }

    async loginToast(err: any) {
      const toast = await this.toastController.create({
        message: 'Erro!',
        duration: 4000
      });
      toast.present();
    }

    async confirmToast(res: any) {
      const toast = await this.toastController.create({
        message: 'Você está logado!',
        duration: 4000
      });
      toast.present();
    }

    

    getFotoAvatar(){
      return this.photo;
    }

    setFotoAvatar(img){
      return this.photo = img;
    }
  

}
