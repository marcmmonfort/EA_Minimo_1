import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.css']
})
export class ActivityCreateComponent {

  activityForm: FormGroup | any;
  isModalOpen:boolean=false;
  constructor(private formBuilder: FormBuilder, private activityService: ActivityService, private router: Router) { 
    
    this.activityForm = this.formBuilder.group({
      "nameActivity": ['', Validators.required],
      "creatorActivity": ['', Validators.required],
      "dateActivity": ['', Validators.required],
      "hoursActivity": ['', Validators.required],
      "idLocation": [''], // Optional.
      "descriptionActivity": [''], // Optional.
      "privacyActivity": ['', Validators.required],
      "roleActivity": ['', Validators.required],   
      })
  }

  get f() {
    return this.activityForm.controls;
  }

  onSubmit(): void {
    if (this.activityForm.invalid) {
      return;
    }

    this.openModal();
  }
  confirmChanges(): void {
    const activityData = this.activityForm.value;
    console.log(activityData);
    this.activityService.addActivity(activityData).subscribe(
      (response) => {
        console.log('Actividad guardada correctamente:', response);
        // Aquí podrías redirigir a la página de éxito, por ejemplo
      },
      (error) => {
        console.error('Error al guardar la actividad:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    );
    this.closeModal();
  }
  onAcceptChanges(): void {
    this.confirmChanges();
  }
  onCancelChanges(): void {
    this.isModalOpen = false;
  }
  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }

}
