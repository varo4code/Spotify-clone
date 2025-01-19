import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() track!: TrackModel;
  @Input() class: 'card-small' | 'card-big' = 'card-big';

  constructor() { }

  ngOnInit(): void {
  }

}
