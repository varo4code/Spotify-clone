import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() class: 'card-small' | 'card-big' = 'card-big';
  @Input() tracks: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
