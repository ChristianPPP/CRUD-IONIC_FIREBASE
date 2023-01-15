import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FolderPage } from '../folder/folder.page';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss'],
})
export class ActualizarComponent implements OnInit {

  constructor(private router: Router, private personService: PersonService, private activatedRoute: ActivatedRoute, private folder: FolderPage) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.id)
    this.persona = this.personService.getPerson(this.id)
  }

  persona: any;
  id!: string;

  async ngOnInit() {

    await this.persona.then((data: any) => {
      console.log(data)
      this.persona = data
    })
  }

  formSubmit() {
    console.log(this.persona)
    this.personService.updatePerson(this.id, this.persona)?.then(() => {
      this.router.navigateByUrl('/folder/Listar', { replaceUrl: true })
    }).catch(err => console.log(err))
  }

}
