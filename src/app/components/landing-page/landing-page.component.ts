import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  cardData: { icon: string; title: string; nextIcon: string; url: string }[] = [];
  cardData2: { icon: string; title: string; nextIcon: string; url: string }[] = [];
  ngOnInit() {
    this.cardData = [
      { icon: '../../../assets/images/Fiction.svg', title: 'FICTION', nextIcon: '../../../assets/images/Next.svg', url: '/fiction' },
      { icon: '../../../assets/images/Drama.svg', title: 'DRAMA', nextIcon: '../../../assets/images/Next.svg', url: '/fiction' },
      { icon: '../../../assets/images/Humour.svg', title: 'HUMOUR', nextIcon: '../../../assets/images/Next.svg', url: '/fiction' },
      { icon: '../../../assets/images/Politics.svg', title: 'POLITICS', nextIcon: '../../../assets/images/Next.svg', url: '/fiction' },

    ]
    this.cardData2 = [{ icon: '../../../assets/images/Philosophy.svg', title: 'PHILOSOPHY', nextIcon: '../../../assets/images/Next.svg', url: '/fiction' },
    { icon: '../../../assets/images/History.svg', title: 'HISTORY', nextIcon: '../../../assets/images/Next.svg', url: '/fiction' },
    { icon: '../../../assets/images/Adventure.svg', title: 'ADVENTURE', nextIcon: '../../../assets/images/Next.svg', url: '/fiction' }]
  }
}
