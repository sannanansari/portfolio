import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { LottieModule } from 'ngx-lottie';
import LottiePlayer from 'lottie-web';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

export function playerFactory() {
  return LottiePlayer;
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottieModule.forRoot({ player: playerFactory }),
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
  // providers: [LottieSplashScreen],
})
export class HomePageModule {}
