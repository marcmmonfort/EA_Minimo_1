import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from '../interfaces/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionShareService {
    private sessionData = new BehaviorSubject<Session>({
        userSession: '',
        loginDateSession: '',
        loginReason: '',
        createdAt: '',
        updatedAt: '',
    });

  getSessionShare(): BehaviorSubject<Session> {
    return this.sessionData;
  }

  setSessionShare(session: Session): void {
    this.sessionData.next(session);
  }
}