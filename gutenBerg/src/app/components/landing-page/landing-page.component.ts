import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  cardData: { icon: string; title: string; nextIcon: string; }[] = [];
  cardData2: { icon: string; title: string; nextIcon: string; }[] = [];
  ngOnInit() {
    this.cardData = [
      { icon: '../../../assets/images/Fiction.svg', title: 'FICTION', nextIcon: '../../../assets/images/Next.svg' },
      { icon: '../../../assets/images/Drama.svg', title: 'DRAMA', nextIcon: '../../../assets/images/Next.svg' },
      { icon: '../../../assets/images/Humour.svg', title: 'HUMOUR', nextIcon: '../../../assets/images/Next.svg' },
      { icon: '../../../assets/images/Politics.svg', title: 'POLITICS', nextIcon: '../../../assets/images/Next.svg' },

    ]
    this.cardData2 = [{ icon: '../../../assets/images/Philosophy.svg', title: 'PHILOSOPHY', nextIcon: '../../../assets/images/Next.svg' },
    { icon: '../../../assets/images/History.svg', title: 'HISTORY', nextIcon: '../../../assets/images/Next.svg' },
    { icon: '../../../assets/images/Adventure.svg', title: 'ADVENTURE', nextIcon: '../../../assets/images/Next.svg' }]
  }
}
