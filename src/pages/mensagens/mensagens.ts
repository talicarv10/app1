import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public listMsgs: ListmsgsProvider, public toastController: ToastController) {
    this.initializeItems();
    if (this.list == null){
      this.listmsgToast();
    }
    
  }

  async listmsgToast() {
    const toast = await this.toastController.create({
      message: 'Não existem mensagens!',
      duration: 4000
    });
    toast.present();
  }
  
  async listmsgfilterToast() {
    const toast = await this.toastController.create({
      message: 'Mensagem não encontrada!',
      duration: 1000
    });
    toast.present();
  }


  initializeItems() {
     this.listMsgs.getMsgs(this.id).then(
       (data) =>{
         this.list = data;
         this.items = this.list;
         console.log('msg page:' + this.id);
         console.log(this.list)
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
  

  onClear($event){
    this.list = this.items;
  }

  onBlur($event){
    this.listmsgfilterToast();
  }
  
}

