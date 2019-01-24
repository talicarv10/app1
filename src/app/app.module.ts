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
import { ListmsgsProvider } from '../providers/listmsgs/listmsgs';
import { DatePipe } from '@angular/common';
import {registerLocaleData } from '@angular/common'; 
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { CameraOriginal } from '@ionic-native/camera';
registerLocaleData(ptBr); 




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
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    CameraOriginal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LastpostProvider,
    RestProvider,
    ListmsgsProvider,
    DatePipe
  ]
})
export class AppModule {}
