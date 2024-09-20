import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationHistory: Array<{ 
    fecha: string; 
    titulo: string; 
    institucion: string; 
  }> = []; // Eliminado logros

  ngOnInit(): void {
    const education1 = {
      fecha: '2019-2022',
      titulo: 'Técnico en Contabilidad',
      institucion: 'Centro de Bachilleratos Técnico Industrial y de Servicios no.66',
    };

    const education2 = {
      fecha: '2022-Actualidad',
      titulo: 'Licenciatura en Ingeniería de Software',
      institucion: 'Universidad Veracruzana',
    };

    this.educationHistory.push(education1, education2);
    console.log(this.educationHistory);
  }
}
