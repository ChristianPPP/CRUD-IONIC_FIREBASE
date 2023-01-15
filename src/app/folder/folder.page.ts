import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute,
    private loadingController: LoadingController,
		private alertController: AlertController,
		private authService: AuthService,
		private router: Router,
    private appCOmponent: AppComponent) { }

  ngOnInit() {
    this.appCOmponent.ngOnInit()
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async logout() {
    const loading = await this.loadingController.create();
		await loading.present();

    await this.authService.logout().then(() => {
      window.localStorage.removeItem("user")
      this.appCOmponent.ngOnInit()
    })

    await loading.dismiss();
    this.router.navigateByUrl('', { replaceUrl: true });
  }

  async showAlert(header: string, message: string) {
		const alert = await this.alertController.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}

}
