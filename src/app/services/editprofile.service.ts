import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EditprofileService {


  loggedIn = false;
  editLog: string[] = [];

  constructor() { }

  save(user: string, id: string) {
    // this.editLog.push(`save: ${"http://localhost:8080/user/UpdateUser/_id"}, ${i_d}`);
 
  }
}
