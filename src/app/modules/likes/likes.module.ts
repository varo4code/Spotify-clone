import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikesRoutingModule } from './likes-routing.module';
import { LikesComponent } from './components/likes/likes.component';
import { LikesHeaderComponent } from './components/likes/likes-header/likes-header.component';
import { LikesBodyComponent } from './components/likes/likes-body/likes-body.component';
import { SortingTracksPipe } from '@core/pipes/sorting-tracks.pipe';
import { DurationPipe } from '@core/pipes/duration.pipe';


@NgModule({
  declarations: [
    LikesComponent,
    LikesHeaderComponent,
    LikesBodyComponent,
    SortingTracksPipe,
    DurationPipe
  ],
  imports: [
    CommonModule,
    LikesRoutingModule
  ]
})
export class LikesModule { }
