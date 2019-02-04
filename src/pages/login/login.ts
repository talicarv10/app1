import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
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
  public user = { nome: '', senha: '' };
  dados;
  lembrar: boolean;
  name;
  


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private session: Session,
    public restProvider: RestProvider, private toastCtrl: ToastController, private loadingController: LoadingController) {
     
  }


  cryp() {


    this.resultado = hasha(this.user.senha, { algorithm: 'sha256', encoding: 'base64' });
    console.log('resultado = ', this.resultado);

  }

  formatar() {
    var login = this.user.senha;

    if (this.user.senha != undefined) {
      login = login.replace(/\D/g, '');
      this.user.senha = login;
      console.log(this.user.senha);
    }

  }


  openPrincipal() {
    this.lembrarUser();
    this.cryp();
    this.restProvider.saveUser({
      login: this.user.nome,
      senha: this.resultado
    })
      .then((result) => {
        this.presentLoading(result);
        this.confirmToast(result);
        this.criarSession(result);
        this.navCtrl.setRoot(PrincipalPage);

        console.log(result);
      })
      .catch((error: any) => {
        if (error.message){
          let toast = this.toastCtrl.create({
            message: error.message,
            duration: 3000
          });
          toast.present();
        } else {
          console.log(error);
        let toast = this.toastCtrl.create({
          message: error.error.erro.mensagem,
          duration: 3000
        });
        toast.present();
        }
        
      });
    }

    async confirmToast(result: any) {
      const toast = await this.toastCtrl.create({
        message: 'Você está logado!',
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
    console.log('ionViewDidLoad LoginPage');
  }


  criarSession(user) {
    this.session.set('user',user)
  }

  lembrarUser(){
    if (this.lembrar) {
      this.session.set('login',this.lembrar)
    } else {
      this.session.remove('login');
    }

  }

  
}