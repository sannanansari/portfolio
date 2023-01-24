import { Component, NgZone, OnInit } from '@angular/core';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { Animation, AnimationController } from '@ionic/angular';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  animationImage!: Animation;
  animationText!: Animation;
  animation!: AnimationItem;
  change = 0;
  optionsDeveloper: any = {
    path: '../../assets/lottie/developer.json',
  };
  optionsDeveloper2: any = {
    path: '../../assets/lottie/developer2.json',
  };
  optionsDeveloper3: any = {
    path: '../../assets/lottie/developer-3.json',
  };
  optionsTwitter: any = {
    path: '../../assets/lottie/twitter.json',
  };
  optionsLinkedIn: any = {
    path: '../../assets/lottie/linkeds2.json',
  };
  optionsGithub: any = {
    path: '../../assets/lottie/github.json',
  };

  constructor(
    private animationCtrl: AnimationController,
    // private lottie: LottieSplashScreen,
    private ngZone: NgZone) {}

    
  initializeApp(animation: AnimationItem) {
    this.animation = animation;
  }

  initializelinks(animation: AnimationItem) {
    this.animation = animation;
  }
  ngOnInit(): void {
    setInterval(() => {
      this.change += 1
      if(this.change == 3) this.change = 0;
    },4000)
  }

}
