import { Injectable } from '@angular/core';
import { collectionData, Firestore, addDoc, setDoc, doc, getDoc, deleteDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(
    private readonly firestore: Firestore
  ) { }

  collectionName = window.localStorage.getItem('user');

  createPerson(person: any) {
    if (this.collectionName) {
      return addDoc(collection(this.firestore, this.collectionName), person);
    } else {
      return null;
    }
  }

  async getPerson(id: string) {
    if (this.collectionName) {
      return (await getDoc(doc(this.firestore, this.collectionName, id))).data();
    } else {
      return null;
    }
  }

  listPerson(): Observable<any> | null{
    if (this.collectionName) {
      console.log(this.collectionName)
      return collectionData<any>(collection(this.firestore, this.collectionName), {idField: 'id'})
    } else {
      return null;
    }
  }

  updatePerson(id: string, person: any) {
    if (this.collectionName) {
      return setDoc(doc(this.firestore, this.collectionName, id), person)
    } else {
      return null;
    }
  }

  deletePerson(id: string) {
    if (this.collectionName) {
      return deleteDoc(doc(this.firestore, this.collectionName, id))
    } else {
      return null;
    }
  }
}
