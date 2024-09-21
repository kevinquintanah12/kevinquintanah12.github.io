import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestComponent {
  interests: Array<{ name: string }> = [];

  ngOnInit(): void {
    this.interests.push(
      { name: 'Music' },
      { name: 'Technology' },
      { name: 'Movies' },
      { name: 'Animals' },
      { name: 'Travel' }
    );
    console.log(this.interests);
  }
}
