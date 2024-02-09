import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'google',
    component:GoogleMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
