import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from 'src/app/interfaces/session.interface';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.css']
})
export class SessionEditComponent {

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
      console.log(sessionData);
      this.sessionData=sessionData;
    });
  }

  onSubmit():void{
    this.openModal();
  }
  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }
  confirmChanges(): void {
    this.sessionService.editSession(this.sessionData, this.sessionId).subscribe(() => {
      this.closeModal();
    });
  }
  onAcceptChanges(): void {
    this.confirmChanges();
  }
  onCancelChanges(): void {
    this.isModalOpen = false;
    this.loadSessionData();
  }

}
