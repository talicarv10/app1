import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { TitlepostPage } from '../titlepost/titlepost';
import { LoginPage } from '../login/login';
import { CameraPage } from '../camera/camera';
import { LastpostProvider } from '../../providers/lastpost/lastpost';
import { HttpClient } from '@angular/common/http';
import { Session } from '../../providers/session/session';
import { LoadedModule } from 'ionic-angular/umd/util/module-loader';

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
    private session: Session, private loadingController: LoadingController, private toastController: ToastController) {
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
    if (this.user != null){
      this.name = this.user.nome.charAt(0);
      let sobrenome: string[] = this.user.nome.split(" ");
      this.lastname = sobrenome[sobrenome.length - 1].charAt(0);
      this.result = this.name.concat(this.lastname);
      console.log(this.result);
    }
    }
  



  loadData() {
    this.lastPost.getLastpost().then(
      (data) => {
        this.presentLoading(data);
        this.post0 = data
        console.log(this.post0);
      }, error=>{
        let toast = this.toastController.create({
          message: error.message,
          duration: 3000
        });
        toast.present();
      });
  }
  
  async presentLoading(data: any) {
    const loading = await this.loadingController.create({
      duration: 1000
    });
    return await loading.present();
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
    if (this.user != null){
      this.session.get(this.user.id).then((photo) => {
        this.photo = photo;
        console.log(photo)
        console.log(this.photo)
      })
    }
    }
   
}
