import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  AlbumResultComponent,
} from './album-result/album-result.component';
import {
  ArtistResultComponent,
} from './artist-result/artist-result.component';
import { MaterialModule } from './material.module';
import { CopyrightPipe } from './pipes/copyright.pipe';
import { MSToStringPipe } from './pipes/ms-to-string.pipe';
import { SplitNumberPipe } from './pipes/split-number.pipe';
import {
  SimpleAlbumComponent,
} from './simple-album/simple-album.component';
import {
  SimpleArtistComponent,
} from './simple-artist/simple-artist.component';
import {
  SimpleTrackComponent,
} from './simple-track/simple-track.component';
import {
  TrackResultComponent,
} from './track-result/track-result.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],

  declarations: [
    ArtistResultComponent,
    AlbumResultComponent,
    TrackResultComponent,
    SimpleAlbumComponent,
    SimpleTrackComponent,
    SimpleArtistComponent,
    MSToStringPipe,
    CopyrightPipe,
    SplitNumberPipe,
  ],

  exports: [
    CommonModule,
    MaterialModule,
    ArtistResultComponent,
    AlbumResultComponent,
    TrackResultComponent,
    SimpleAlbumComponent,
    SimpleTrackComponent,
    SimpleArtistComponent,
    MSToStringPipe,
    CopyrightPipe,
    SplitNumberPipe,
  ],
})
export class SharedModule {
}
