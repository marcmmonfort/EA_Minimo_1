import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/interfaces/session.interface';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent {

  sessionData!: Session;
  sessionId!: string;
  isModalOpen:boolean=false;
  
  constructor(private route: ActivatedRoute, private sessionService: SessionService,private router:Router) {}

  ngOnInit(): void {
    this.loadSessionData();
  }

  loadSessionData(): void {
    const url = this.route.snapshot.url.join('/');
    const parts = url.split('/');
    this.sessionId = parts[parts.length - 1];
    console.log(this.sessionId);
    this.sessionService.getSession(this.sessionId).subscribe(sessionData=>{
      this.sessionData=sessionData;
      console.log(this.sessionData);
    });
  }

  showResponses(session:Session):void{
    this.router.navigate(['session-details/responses/',session._id])
  }
  
}

