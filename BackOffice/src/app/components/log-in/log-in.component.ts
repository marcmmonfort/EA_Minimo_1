import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { KnownService } from 'src/app/services/known.service';
import { SessionService } from 'src/app/services/session.service';
import { SessionShareService } from 'src/app/services/sessionShare.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  
  loginForm: FormGroup | any;
  userKnown:boolean=false;

  constructor(private sessionShareService: SessionShareService, private formBuilder: FormBuilder, private loginService: AuthService, private sessionService: SessionService, private knownService: KnownService, private router: Router) {
    
    this.loginForm = this.formBuilder.group({
      "mailUser": ['', [Validators.required, Validators.email]],
      "passwordUser": ['', Validators.required],
      "loginReason": ['', Validators.required],
    });
  }
  
  
  ngOnInit(): void {
    this.knownService.getUserKnown().subscribe(userKnown => {
      this.userKnown = userKnown;
    });
  }
  

  get f() {
    return this.loginForm.controls;
  }

  login(): void{
    const authData = this.loginForm.value;
    console.log("Mail:",this.loginForm.value.mailUser);
    console.log("Password:",this.loginForm.value.passwordUser);
    this.loginService.logIn(authData).subscribe(
      (data:any)=>{
        console.log(data);
        alert("¡LogIn efectuado correctamente!");

        // Quiero saber cual es el userId que MongoDB ha asignado a mi usuario ...
        const userId = data.user._id;

        // Aquí deberíamos hacer el registro de esta sesión:

        const sessionData = this.loginForm.value;
        const loginDate = new Date().toISOString();
        sessionData.loginDateSession = loginDate;
        sessionData.userSession = userId;

        console.log("User ID:",sessionData.userSession);
        console.log("Login Date:",sessionData.loginDateSession);
        console.log("Logout Date:",sessionData.logoutDateSession);
        console.log("Login Reason:",sessionData.loginReason);

        this.sessionService.addSession(sessionData).subscribe(
          (response) => {
            console.log('Sesión guardada correctamente.', response);

            // Pasamos la sesión a Navigate para poder tenerla para hacer el Logout ...

            this.sessionShareService.setSessionShare(sessionData);

            // Aquí deberíamos hacer el cambio de la barra de navigate ...
            this.knownService.updateUserKnown(true);
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Error al guardar la sesión:', error);
          }
        );
      },(error:any)=>{
        alert("¡No existe ningún usuario con estas credenciales!");console.log(error)
        this.router.navigate(['/register']);
      });
  }

}
