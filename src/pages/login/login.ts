import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  nome = '';
  senha = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPrincipal(){
    this.navCtrl.push(PrincipalPage, {});    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
