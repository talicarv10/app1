import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { TitlepostPage } from '../titlepost/titlepost';
import { LoginPage } from '../login/login';
import { CameraPage } from '../camera/camera';
import { DetailsPage } from '../details/details';
import { PostComponent } from '../../components/post/post';
import { LastpostProvider } from '../../providers/lastpost/lastpost';
import { executeViewHooks } from '@angular/core/src/render3/instructions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
  providers: [
    LastpostProvider
  ]
})
export class PrincipalPage {

  public post0: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private lastPost: LastpostProvider,
    public http: HttpClient) {

      this.post0 = {
        titulo: "",
        autor: "",
        mensagem: "",
        data: ""
      }
      

      this.loadData();
      
    
  }

  loadData(){
    let data: Observable<any>;
    data = this.http.get("http://aulas.getsandbox.com/last_post");
    data.subscribe (result =>{
      this.post0 = result;
    }
      )
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
