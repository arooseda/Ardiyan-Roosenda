import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    private modalController: ModalController,
  ) { }
  ngOnInit() {
  }
  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }
  
}