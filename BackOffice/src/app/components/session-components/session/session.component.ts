import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'src/app/interfaces/session.interface';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit{

  sessions: Session[] = [];
  filteredSessions: any[] = [];
  searchTerm: string = '';

  constructor(private sessionService: SessionService, private router: Router) {}

  ngOnInit(): void {
    this.sessionService.getAllSessions().subscribe(data=> {
      this.sessions = data;
    }, error => {
      console.log(error);
    })
  }

  showDetails(session: any): void {
    this.router.navigate(['/session-details', session._id]);
  }
  showEdit(session: any): void {
    this.router.navigate(['/session-edit', session._id]);
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      this.filteredSessions = this.sessions.filter((session) =>
        session.createdAt.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredSessions = this.sessions;
      console.log(this.filteredSessions);
    }
  }

}
