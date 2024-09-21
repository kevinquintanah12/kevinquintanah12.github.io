import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component'; // Importar el componente de educación
import { SkillsComponent } from './skills/skills.component'; // Importar el componente de educación
import { AchievementsComponents } from './achievements/achievements.component'; // Importar el componente de educación
import { LanguageComponent } from './language/language.component'; // Importar el componente de educación
import { InterestComponent } from './interests/interests.component'; // Importar el componente de educación


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WorkExperienceComponent, EducationComponent, SkillsComponent, AchievementsComponents, LanguageComponent, InterestComponent], // Añadir EducationComponent a los imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Asegúrate de que esté en plural
})
export class AppComponent {
  title = 'mycv';
}
