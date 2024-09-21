import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent {
  languages: Array<{ name: string }> = [];

  ngOnInit(): void {
    this.languages.push(
      { name: 'Spanish' },
      { name: 'English' }
    );
    console.log(this.languages);
  }
}
