import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  trackList: Array<TrackModel> = [    ]

  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default;
    this.trackList = data;
  }

}
