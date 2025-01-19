import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './components/tracks/tracks.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    TracksComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    CoreModule
  ]
})
export class TracksModule { }
