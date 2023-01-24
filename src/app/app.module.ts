import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { LottieModule } from 'ngx-lottie';
import LottiePlayer from 'lottie-web';

export function playerFactory() {
  return LottiePlayer;
}


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,LottieModule.forRoot({ player: playerFactory }),],
  providers: [LottieSplashScreen,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule {}
