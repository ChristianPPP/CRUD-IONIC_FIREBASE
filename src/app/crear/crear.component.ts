import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  constructor(private personService: PersonService) { }
  persona: any;

  ngOnInit() {
    this.persona = {nombre: '', apellido: '', edad: ''}
  }

  logForm() {
    console.log(this.persona)
  }


  formSubmit() {
    console.log(this.persona)
    this.personService.createPerson(this.persona)?.then((res) => {
      console.log(res)
    }).catch(e => console.log(e))
  }


}
