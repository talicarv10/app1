import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Session } from '../../providers/session/session';
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
  id = this.navParams.get('id')
  public photo;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private session: Session) {

    this.setPhoto();
  }



  getPhoto(type) {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type == "photo" ?
        this.camera.PictureSourceType.CAMERA :
        this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      targetHeight: 500,
      targetWidth: 500,

    };
    this.camera.getPicture(options).then((imageData) => {
      this.photo = 'data:image/jpeg;base64,' + imageData;
       this.savePhoto();
    }, (erro) => {
      console.log(erro)
    });

   
  }

  savePhoto() {
    this.session.set(String(this.id), this.photo);

  }

  setPhoto() {
    this.session.get(this.id).then((photo) => {
      this.photo = photo;
      console.log("camera")
      console.log(photo)
      console.log(this.photo)
    })
  }

}
