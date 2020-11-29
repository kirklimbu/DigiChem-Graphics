// Angular
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GallaryComponent } from './pages/gallary/gallary.component';
//Project
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './pages/services/services.component';
import { IHaveWorkedForComponent } from './pages/i-have-worked-for/i-have-worked-for.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'gallery',
    component: GallaryComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'worked-for',
    component: IHaveWorkedForComponent,
  },
  {
    path:'clients',
    component: ClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
