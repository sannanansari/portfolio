import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  animationImage!: Animation;
  animationText!: Animation;
  animation!: AnimationItem;

  options: any = {
    path: '../../assets/lottie/developer.json',
  };
  constructor(
    // private animationCtrl: AnimationController,
    // private lottie: LottieSplashScreen,
    // private ngZone: NgZone
    ) {}

    
  initializeApp(animation: AnimationItem) {
    this.animation = animation;
  }
}
