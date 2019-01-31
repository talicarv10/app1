import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


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
 
})
export class DetailsPage {

  public post0 = this.navParams.get('post');

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, ) {


    

  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
