import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { TitlepostPage } from '../titlepost/titlepost';
import { LoginPage } from '../login/login';
import { CameraPage } from '../camera/camera';
import { LastpostProvider } from '../../providers/lastpost/lastpost';
import { HttpClient } from '@angular/common/http';
import { Session } from '../../providers/session/session';

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
  user;
  lastname: string;
  name: string;
  result: string;
  photo;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private lastPost: LastpostProvider,
    public http: HttpClient,
    private session: Session) {
    this.loadData();




  }

  ngOnInit() {
    this.session.get('user').then(user => {
      this.user = user;
      this.showNameAvatar();
      this.setPhoto();
    })
  }

  ionViewDidEnter(){
    if(this.user!=null ){
      this.setPhoto();
    }
   
  }

  showNameAvatar() {

    this.name = this.user.nome.charAt(0);
    let sobrenome: string[] = this.user.nome.split(" ");
    this.lastname = sobrenome[sobrenome.length - 1].charAt(0);
    this.result = this.name.concat(this.lastname);
    console.log(this.result);
  }



  loadData() {
    this.lastPost.getLastpost().then(
      (data) => {
        this.post0 = data
        console.log(this.post0);
      }
    )
  }

  openMensagens() {
    this.navCtrl.push(MensagensPage, {'id': this.user.id});
  }

  openTitlepost() {
    this.navCtrl.push(TitlepostPage.name, {});
  }

  openLogin() {
    this.navCtrl.setRoot(LoginPage.name);
    this.session.remove('user');
  }

  openCamera() {
    this.navCtrl.push(CameraPage.name, { 'id': this.user.id });
  }

  setPhoto() {
    this.session.get(this.user.id).then((photo) => {
      this.photo = photo;
      console.log(photo)
      console.log(this.photo)
    })
  }
}
