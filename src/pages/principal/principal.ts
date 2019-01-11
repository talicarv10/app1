import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { TitlepostPage } from '../titlepost/titlepost';
import { LoginPage } from '../login/login';
import { CameraPage } from '../camera/camera';
import { DetailsPage } from '../details/details';
import { PostComponent } from '../../components/post/post';

/**
 * Generated class for the AppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  post0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  

    this.post0 = {
      title: "Férias de verão",
      description: "Minhas férias de verão foram incríveis e blablabla, adorei!",
      name: "Talita Carvalho",
      date: new Date()
    }
  }

  openMensagens(){
    this.navCtrl.push(MensagensPage, {});    
  }

  openTitlepost(){
    this.navCtrl.push(TitlepostPage, {});    
  }

  openLogin(){
    this.navCtrl.push(LoginPage, {});    
  }

  openCamera(){
    this.navCtrl.push(CameraPage, {});    
  }

  openDetails(){
    this.navCtrl.push(DetailsPage, {});    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
