import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraOriginal, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  myphoto: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public cameraOriginal: CameraOriginal) {
    }

  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.cameraOriginal.DestinationType.FILE_URI,
      encodingType: this.cameraOriginal.EncodingType.JPEG,
      mediaType: this.cameraOriginal.MediaType.PICTURE
    }
    
    this.cameraOriginal.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
