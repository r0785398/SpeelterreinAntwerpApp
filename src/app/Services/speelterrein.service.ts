import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, pipe } from 'rxjs';

import { RootSpeelterrein } from '../Interfaces/ispeelterrein';
import { RootSpeelterreinDetail } from '../Interfaces/ispeelterrein-detail';

@Injectable({
  providedIn: 'root',
})
export class SpeelterreinService {

  private _urlSpeelterrein: string =
    'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/50/query?where=1%3D1&outFields=*&outSR=4326&f=json';

  private _url2: string =
    'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek1/MapServer/50/';

  constructor(private httpClient: HttpClient) {}

  getAllSpeeltereinen(): Observable<RootSpeelterrein> {
    return this.httpClient.get<RootSpeelterrein>(this._urlSpeelterrein);
  }

  find(id: number): Observable<RootSpeelterreinDetail> {
    return this.httpClient.get<RootSpeelterreinDetail>(this._url2 + id + '?f=pjson');
  }
}
