import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: 'favs',
    loadChildren: () => import('@modules/likes/likes.module').then(m => m.LikesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
