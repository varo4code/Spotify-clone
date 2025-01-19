import { TrackModel } from '@core/models/tracks.model';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../../data/tracks.json';

@Component({
  selector: 'app-likes-body',
  templateUrl: './likes-body.component.html',
  styleUrls: ['./likes-body.component.scss']
})
export class LikesBodyComponent implements OnInit {
  tracks: TrackModel[] = [];

  constructor() { }

  ngOnInit(): void {
    const {data} = (dataRaw as any).default;
    this.tracks = data;
  }

}
