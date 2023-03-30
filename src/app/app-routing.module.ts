import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'articles',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pages/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
