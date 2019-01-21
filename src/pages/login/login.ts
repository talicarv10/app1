import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Keyboard } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { RestProvider } from '../../providers/rest/rest';
import hasha from 'hasha';


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
  providers: [
    RestProvider
  ]
})
export class LoginPage {

  private resultado: string;
  public user = { nome: '', senha:''};
  dados;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public restProvider: RestProvider) {
    
    
    
  }  


  cryp(){

    const hasha = require('hasha');
    this.resultado = hasha(this.user.senha, { algorithm: 'sha256', encoding: 'base64'});
    console.log('resultado = ', this.resultado);

  }
    


  
    

  openPrincipal(){
    
      this.cryp();
      this.restProvider.saveUser({
        login: this.user.nome, 
        senha: this.resultado
      })
      .then((result) => {
        this.dados = result;
        this.navCtrl.setRoot(PrincipalPage, {'user': this.dados});  
      console.log(result); 
      })
      .catch((err) => { 
      console.log(err); 
      }); 

    this.navCtrl.push(PrincipalPage, {});     
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}