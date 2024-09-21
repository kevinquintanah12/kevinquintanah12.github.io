import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponents {
  Achievements: Array<{ 
    name: string; 
    description: string; 
  }> = [];

  ngOnInit(): void {
    let achievement1 = {
      name: 'International Exchange',
      description: 'Certificate of International Exchange for Exchange with Brazilian School',
    };

    let achievement2 = {
      name: 'Diploma of Academic Achievement',
      description: 'Academic Honor in 4th Semester for achieving a 9.0 average.',
    };

    let achievement3 = {
      name: 'Dean’s List',
      description: 'Recognized for academic excellence in 2 consecutive semesters with a GPA of 9.5.',
    };

    let achievement4 = {
      name: 'Research Assistantship',
      description: 'Assisted in AI research on natural language processing, contributing to published work.',
    };

    let achievement5 = {
      name: 'Hackathon Winner',
      description: 'Won first place in a national hackathon for developing a mobile app in 48 hours.',
    };

    let achievement6 = {
      name: 'Best Project Award',
      description: 'Awarded Best Final Year Project for the development of a student attendance management system.',
    };

    let achievement7 = {
      name: 'Volunteering Excellence Award',
      description: 'Recognized for outstanding contributions to a community education program, with over 100 hours of service.',
    };

    this.Achievements.push(achievement1, achievement2, achievement3, achievement4, achievement5, achievement6, achievement7);
    console.log(this.Achievements);
  }
}
