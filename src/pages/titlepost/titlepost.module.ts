import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TitlepostPage } from './titlepost';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TitlepostPage,
  ],
  imports: [
    IonicPageModule.forChild(TitlepostPage),
    ComponentsModule
  ],
})
export class TitlepostPageModule {}
