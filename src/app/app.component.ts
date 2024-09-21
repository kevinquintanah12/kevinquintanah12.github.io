import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component'; 
import { SkillsComponent } from './skills/skills.component'; 
import { AchievementsComponents } from './achievements/achievements.component'; 
import { LanguageComponent } from './language/language.component'; 
import { InterestComponent } from './interests/interests.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    WorkExperienceComponent, 
    EducationComponent, 
    SkillsComponent, 
    AchievementsComponents, 
    LanguageComponent, 
    InterestComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycv';
}
