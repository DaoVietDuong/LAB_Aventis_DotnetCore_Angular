import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './shared/pages/not-found/not-found.page';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },  
  {
    path: '404', 
    component: NotFoundPage
    
  },
   {
     path: '**', 
     redirectTo: '/404'
     
   }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ],
  declarations: [NotFoundPage]
})

export class AppRoutingModule { }
