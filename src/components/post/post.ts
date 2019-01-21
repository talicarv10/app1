import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../../pages/details/details';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html',
})
export class PostComponent {

  @Input()
  mainpost: any;

  data: any;

  constructor(private datepipe: DatePipe, public navCtrl: NavController) {
    this.datepipe = new DatePipe("pt-BR");
    console.log('Hello PostComponent Component');
  }

  openDetails(){
    this.navCtrl.push(DetailsPage, {'post': this.mainpost});    
  }

  ngOnInit(){
    this.data = this.datepipe.transform(this.mainpost.data,'dd/MM/yyyy');
    this.mainpost.data = this.datepipe.transform(this.mainpost.data,'short');
  }
}




