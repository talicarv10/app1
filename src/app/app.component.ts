import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { Session } from '../providers/session/session';
import { PrincipalPage } from '../pages/principal/principal';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private session:Session) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.show();
      splashScreen.hide();
      this.root();
  
    });
  }

  root(){
     this.session.get('user').then(user =>{
       if(user){
         this.rootPage = PrincipalPage.name;
       }else{
         this.rootPage = LoginPage.name;
       }
     })
  }
}

