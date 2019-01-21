import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostComponent } from '../../components/post/post';
import { Title } from '@angular/platform-browser';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the TitlemsgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-titlepost',
  templateUrl: 'titlepost.html',
})
export class TitlepostPage {

  user = this.navParams.get('user')
  
  public posts : Array<any> = [];
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

    this.posts = [
      {
        titulo: "",
        mensagem: "",
        autor: "",
        data: ""
      }
    ]
    
    this.loadData();

  }

  loadData(){
    let data: Observable<any>;
    data = this.http.get("http://aulas.getsandbox.com/posts");
    data.subscribe (result =>{
      this.posts = result;
    }
      )
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TitlepostPage');
  }

}
