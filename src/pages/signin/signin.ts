import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../app/services/auth.service';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController){}

  onSignIn(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signIn(form.value.email, form.value.password)
    .then( data => {
      loading.dismiss();
    })
    .catch( error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Signin failed!',
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
  }

}
