import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { TitlepostPage } from '../titlepost/titlepost';
import { LoginPage } from '../login/login';
import { CameraPage } from '../camera/camera';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
