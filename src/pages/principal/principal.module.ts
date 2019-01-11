import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalPage } from './principal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalPage),
    ComponentsModule
  ],
})
export class PrincipalPageModule {}
