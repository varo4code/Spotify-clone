import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayerComponent } from './components/player/player.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { DurationPipe } from './pipes/duration.pipe';



@NgModule({
  declarations: [
    SidebarComponent,
    PlayerComponent,
    HeaderComponent,
    SectionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    PlayerComponent,
    HeaderComponent,
    SectionComponent,
    CardComponent
  ]
})
export class CoreModule { }
