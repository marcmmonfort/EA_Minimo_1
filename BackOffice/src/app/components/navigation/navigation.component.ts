import { KnownService } from 'src/app/services/known.service';
import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/interfaces/session.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SessionShareService } from 'src/app/services/sessionShare.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userKnown:boolean=false;
  sessionData: any;
  sessionId!: string;
  sessionService: any;
  
  constructor(private sessionShareService: SessionShareService, private knownService:KnownService, private route: ActivatedRoute, private userService: UserService,private router:Router) {}

  ngOnInit(): void {
    this.knownService.getUserKnown().subscribe(userKnown => {
      this.userKnown = userKnown;
    });

    this.sessionShareService.getSessionShare().subscribe((data: Session) => {
      this.sessionData = data;
      this.sessionId = this.sessionData._id;
    });

    console.log("(Recibido) User ID:",this.sessionData.userId);
    console.log("(Recibido) Login Date:",this.sessionData.loginDateSession);
    console.log("(Recibido) Logout Date:",this.sessionData.logoutDateSession);
    console.log("(Recibido) Login Reason:",this.sessionData.loginReason);
  }

  LogOut(): void{
    this.knownService.updateUserKnown(false);

    // Aquí quiero hacer Update de la sesión para poder guardar la fecha de cuando se ha cerrado ...
    this.sessionData.logoutDateSession = new Date().toISOString();
    this.sessionService.editSession(this.sessionData, this.sessionId);
    }
    
}