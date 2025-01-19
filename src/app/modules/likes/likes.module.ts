import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikesRoutingModule } from './likes-routing.module';
import { LikesComponent } from './components/likes/likes.component';
import { LikesHeaderComponent } from './components/likes/likes-header/likes-header.component';
import { LikesBodyComponent } from './components/likes/likes-body/likes-body.component';


@NgModule({
  declarations: [
    LikesComponent,
    LikesHeaderComponent,
    LikesBodyComponent
  ],
  imports: [
    CommonModule,
    LikesRoutingModule
  ]
})
export class LikesModule { }
