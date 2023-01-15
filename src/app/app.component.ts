import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Crear', url: '/folder/Crear', icon: 'create' },
    { title: 'Listar', url: '/folder/Listar', icon: 'list' },
    { title: 'Actualizar', url: '/folder/Actualizar/', icon: 'cloud-upload' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {}
  logIn = false

  async ngOnInit() {
    await SplashScreen.show({
      showDuration: 10000,
      autoHide: true,
    }).then(() => {
      if (window.localStorage.getItem('user')) {
        this.logIn = true
      } else {
        this.router.navigateByUrl('', { replaceUrl: true });
      }
    }).catch(err => console.log(err));

  }
}
