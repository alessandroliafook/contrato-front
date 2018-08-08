import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  signOut(){
    this.sessionService.signOut();
    this.router.navigate(['/']);
  }
}
