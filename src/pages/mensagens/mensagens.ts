import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public listMsgs: ListmsgsProvider, public toastController: ToastController, private loadingController: LoadingController) {
    this.initializeItems();
    
  }

  


  initializeItems() {
     this.listMsgs.getMsgs(this.id).then(
       (data: any) =>{
        this.presentLoading(data);
         if(data.erro){
          let toast = this.toastController.create({
            message: data.erro.mensagem,
            duration: 3000
          });
          toast.present();
         } else {
          this.list = data;
          this.items = this.list;
          console.log('msg page:' + this.id);
          console.log(this.list)
         }
       }, error=>{
        let toast = this.toastController.create({
          message: error.message,
          duration: 3000
        });
        toast.present();
         console.log(error)
       }
     );
      
  }

  async presentLoading(data: any) {
    const loading = await this.loadingController.create({
      duration: 1000
    });
    return await loading.present();
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
   
  }
  
}

