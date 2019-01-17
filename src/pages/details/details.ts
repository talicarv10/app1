import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LastpostProvider } from '../../providers/lastpost/lastpost';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [
    LastpostProvider
  ]
})
export class DetailsPage {

  public post0: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private lastPost: LastpostProvider) {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
