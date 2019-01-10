import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { PrincipalPageModule } from '../pages/principal/principal.module';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { TitlepostPageModule } from '../pages/titlepost/titlepost.module';
import { CameraPageModule } from '../pages/camera/camera.module';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MensagensPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    PrincipalPageModule,
    TitlepostPageModule,
    CameraPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MensagensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
