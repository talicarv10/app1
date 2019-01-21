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

  public post0 = this.navParams.get('post');

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private lastPost: LastpostProvider) {


    

  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
