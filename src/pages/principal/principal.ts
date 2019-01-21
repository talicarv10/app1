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
  user = this.navParams.get('user')

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private lastPost: LastpostProvider,
    public http: HttpClient) {;
    
      this.loadData();
    
  }

  loadData(){
    this.lastPost.getLastpost().subscribe(
      (data)=>{
        this.post0 = data
        console.log(this.post0);
      }
    )
       }

  openMensagens(){
    this.navCtrl.push(MensagensPage, {'id': this.user.id});    
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
