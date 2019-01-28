import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PostComponent } from '../../components/post/post';
import { Title } from '@angular/platform-browser';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the TitlemsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-titlepost',
  templateUrl: 'titlepost.html',
})
export class TitlepostPage {

 
  
  public posts : Array<any> = [];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public toastController: ToastController, public loadingController: LoadingController) {

    this.posts = [
      {
        titulo: "",
        mensagem: "",
        autor: "",
        data: ""
      }
    ]
    
    this.loadData();
    if (this.posts == null){
    
    }

  }

  loadData(){
    let data: Observable<any>;
    data = this.http.get("http://aulas2.getsandbox.com/posts");
    data.subscribe ((result =>{
      this.presentLoading(result);
      this.posts = result;
    }), (error: any) =>{
      this.erroToast(error);
    });
  }

  async postsToast() {
    const toast = await this.toastController.create({
      message: 'Não existem posts!',
      duration: 4000
    });
    toast.present();
  }

  async erroToast(error: any) {
    const toast = await this.toastController.create({
      message: 'Conecte-se à internet!',
      duration: 4000
    });
    toast.present();
  }

  async presentLoading(result: any) {
    const loading = await this.loadingController.create({
      duration: 1000
    });
    return await loading.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TitlepostPage');
  }

}
