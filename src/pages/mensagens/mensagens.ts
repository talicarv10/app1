import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListmsgsProvider } from '../../providers/listmsgs/listmsgs';

/**
 * Generated class for the MensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensagens',
  templateUrl: 'mensagens.html',
})
export class MensagensPage {

  id = this.navParams.get('id');
  list:any = new Array;
  
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listMsgs: ListmsgsProvider) {
    this.initializeItems();
    
  }


  


  initializeItems() {
     this.listMsgs.getMsgs(this.id).subscribe(
       (data) =>{
         this.list = data;
         this.items = this.list;
       }, error=>{
         console.log(error)
       }
     );
      
  }

  getItems(ev) {
    // Reset items back  all of the items
    this.list = this.items;

    // set val to the value of the searchbar
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.list.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

