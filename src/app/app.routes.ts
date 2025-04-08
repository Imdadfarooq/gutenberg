import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FictionComponent } from './components/fiction/fiction.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'fiction', component: FictionComponent }
];
