import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Credencial } from '../../model/credencial.model'
import { CredencialService } from '../../services/credencial.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  credencial: Credencial;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private credencialService: CredencialService
  ) { 
    this.credencial = new Credencial();
  }

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.credencial.role = event.target.value;
  }

  ngOnInit() {
    let id = localStorage.getItem("id");
    this.credencialService.getRole(id).subscribe(data => {
      if(data === "ROLE_USUARIO") {
        this.router.navigate(['/usuarios']);
      } else if (data === "ROLE_ADMIN") {
        this.router.navigate(['/credenciais']);
      }
    });
  }

  login() {
    this.sessionService.login(this.credencial);
    console.log(this.credencial)
  }
}
