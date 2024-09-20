import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'], // Cambiado de styleUrl a styleUrls
})
export class WorkExperienceComponent {
  workExperience: Array<{ 
    fecha: string; 
    ubicacion: string; 
    puesto: string; 
    empresa: string; 
    logros: Array<{ descripcion: string }>; 
  }> = [];

  ngOnInit(): void {
    let work1 = {
      fecha: '2018-2022',
      ubicacion: 'Ixtac Ver.',
      puesto: 'CEO',
      empresa: 'Waves Lab',
      logros: [
        { descripcion: 'Development of an ERP in Google Cloud' },
        { descripcion: 'Development of a Cluster in Hadoop and Spark'},
      ],
    };

    let work2 = {
      fecha: '2014-2018',
      ubicacion: 'Orizaba, Ver.',
      puesto: 'CEO',
      empresa: 'Kubeet',
      logros: [
        { descripcion: 'Development of an Hydroponic Greenhouse' },
        { descripcion: 'Development of an Autonomous Drone' },
      ],
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}
