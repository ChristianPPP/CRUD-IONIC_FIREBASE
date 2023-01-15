import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  displayedColumns = ['Nombre', 'Apellido', 'Edad', 'Acciones'];
  dataSource: any;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.personService?.listPerson()?.subscribe((data) => {
      console.log(data)
      this.dataSource = data
    })
  }

  delete(id: string) {
    this.personService.deletePerson(id)?.then(() => {
      this.ngOnInit()
    }).catch(err => console.log(err))
  }

}
