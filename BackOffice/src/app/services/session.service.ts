import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from '../interfaces/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session!: Session ;
  message!: String;
  private apiURL = 'http://localhost:5432/session/';
  constructor(private http: HttpClient) { }

  // (1) Post (creation) of a session ...
  // Ruta >> "/createSession"
  addSession(session: Session): Observable<Session>{
    return this.http.post<Session>(this.apiURL + 'createSession',session);
  }
  
  // (2) Put (edition) of an activity ...
  // Ruta >> "/updateSession/:idSession"
  editSession(session:Session, idSession: string): Observable<Session>{
    return this.http.put<Session>(this.apiURL + 'updateSession/' + idSession, session);
  }
  
  // (3) Delete an activity ...
  // Ruta >> "/deleteSession/:idSession"
  deleteSession(idSession: string):  Observable<Session>{
    return this.http.delete<Session>(this.apiURL + 'deleteSession/' + idSession);
  } 
  
  // (4) Get all activities ...
  // Ruta >> "/getAllSessions"
  getAllSessions ():  Observable<Session[]>{
    return this.http.get<Session[]>(this.apiURL + 'getAllSessions');
  } 
  
  // (5) Get (obtain) a particular activity ...
  // Ruta >> "/getSession/:idSession"
  getSession(idSession: string): Observable<Session> {
    return this.http.get<Session>(this.apiURL + 'getSession/'+ idSession);
  }

};

