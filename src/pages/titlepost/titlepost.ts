import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostComponent } from '../../components/post/post';

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
  
  public post0 : Array<Object> = [];
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.post0 = [

      {
        title: "Férias de verão",
        description: "Minhas férias de verão foram incríveis e blablabla, adorei!",
        name: "Talita Carvalho",
        date: new Date()
      },

      {
        title: "Férias de inverno",
        description: "Minhas férias de inverno foram incríveis e blablabla, adorei!",
        name: "Lorena Lima",
        date: new Date()
      },

      {
        title: "Férias de primavera",
        description: "Minhas férias de primavera foram incríveis e blablabla, adorei!",
        name: "Lucas Souza",
        date: new Date()
      }

    ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TitlepostPage');
  }

}
