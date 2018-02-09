import { SigninPage } from './../pages/signin/signin';
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';
import firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  signUpPage = SignupPage;
  signInPage = SigninPage;
  @ViewChild('nav') nav: NavController;
  isAuthenticated = false;

  constructor(platform: Platform, statusBar: StatusBar,
    private menuCtrl: MenuController, splashScreen: SplashScreen, 
    private authService: AuthService) {
      firebase.initializeApp({
        apiKey: "AIzaSyCx2X7s6Qr2k8FT0ti3AOJaOgL-OdPAVQc",
        authDomain: "udemy-proj-132b0.firebaseapp.com"
      });
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            this.isAuthenticated = true;
            this.rootPage = TabsPage;
          } else {
            this.isAuthenticated = false;
            this.rootPage = SigninPage;
          }
        }
      );
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close()
  }

  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
} 