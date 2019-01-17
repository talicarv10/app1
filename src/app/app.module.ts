import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { PrincipalPageModule } from '../pages/principal/principal.module';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { TitlepostPageModule } from '../pages/titlepost/titlepost.module';
import { CameraPageModule } from '../pages/camera/camera.module';
import { DetailsPageModule } from '../pages/details/details.module';
import { LastpostProvider } from '../providers/lastpost/lastpost';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { ScreenOrientation } from '@ionic-native/screen-orientation';







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
    CameraPageModule,
    DetailsPageModule,
    HttpModule,
    HttpClientModule
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

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LastpostProvider,
    RestProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
