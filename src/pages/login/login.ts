import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { RestProvider } from '../../providers/rest/rest';
import hasha from 'hasha';
import { Session } from '../../providers/session/session';



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
  
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private session:Session, 
    public restProvider: RestProvider) {
    
    
    
  }  

  


  cryp(){

   
    this.resultado = hasha(this.user.senha, { algorithm: 'sha256', encoding: 'base64'});
    console.log('resultado = ', this.resultado);

  }
  
  formatar()
    {
       var login = this.user.senha;

       if(this.user.senha != undefined){
        login = login.replace(/\D/g, '');
        this.user.senha = login;
        console.log(this.user.senha);
       }

    }
    

  openPrincipal(){
    
      this.cryp();
      this.restProvider.saveUser({
        login: this.user.nome, 
        senha: this.resultado
      })
      .then((result) => {
        //this.dados = result;
        this.criarSession(result);
        this.navCtrl.setRoot(PrincipalPage);  
        
      console.log(result); 
      })
      .catch((err) => { 
      console.log(err); 
      }); 

         
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


 criarSession(user){
  this.session.create(user)
 }
}