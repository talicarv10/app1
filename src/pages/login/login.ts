import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Keyboard } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { RestProvider } from '../../providers/rest/rest';
// import SHA_256 from 'sha256/lib/nodecrypto';
//import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

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

  user = { id:'', nome: '', senha:''};

  //private readPass: string;

  //private storage: SecureStorageObject;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    

  }  


  
  


 // public sigin(): void {
   // this.readPass = SHA_256(this.user.senha).toString();

    //this.secureStorage.create('userData')
      //.then((storage: SecureStorageObject) => {
        //this.storage = storage
      
    //this.storage.set('nome', this.user.nome)
      //.then(
       //data => console.log(data), //retorna a chave
       //error => console.log(error)
         // );

    //this.storage.set('senha', this.readPass)
      //.then(
        //data => console.log(data), //retorna a chave
        //error => this.showAlert(this.readPass)
          //);
          
    //this.storage.get('senha')
      //.then(
        //data => { this.readPass = data; this.showAlert(this.readPass); }, //retorna o valor
        //error => console.log("Não existe dados.")
          //);
     // });
  //}

  //private showAlert(alertText: String) {

    //let alert = this.alertCtrl.create({
      //title: 'Dados Salvos e Lidos',
      //subTitle: 'Senha Criptografada: ' + alertText,
      //buttons: ['OK']
    //});
    //alert.present();
  //}



  saveUser() { 
    this.restProvider.saveUser(this.user).then((result) => { 
    console.log(result); 
    }, (err) => { 
    console.log(err); 
    }); 
    }

  openPrincipal(){
    this.navCtrl.push(PrincipalPage, {});    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}