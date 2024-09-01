import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule], // Importar CommonModule para usar *ngFor
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationHistory: Array<{ 
    fecha: string; 
    titulo: string; 
    institucion: string; 
  }> = [];

  ngOnInit(): void {
    const education1 = {
      fecha: '2019-2022',
      titulo: 'Accounting Technician',
      institucion: 'Centro de Bachillerato Técnico Industrial y De Servicios No.66',
      
    };

    const education2 = {
      fecha: '2022-Present',
      titulo: 'Bachelors Degree in Software Engineering',
      institucion: 'Universidad Veracruzana',
      
    };

    this.educationHistory.push(education1, education2);
    console.log(this.educationHistory);
  }
}
