import { Component, OnInit } from '@angular/core';

import { SpeelterreinService } from '../../Services/speelterrein.service';
import { Feature } from '../../Interfaces/ispeelterrein';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public Speelterreinen: Feature[] = [];

  constructor(private _speelterrein: SpeelterreinService) {}

  ngOnInit(): void {
    this._speelterrein
      .getAllSpeeltereinen()
      .subscribe((data) => this.sortList((this.Speelterreinen = data.features)));

      console.log(this.Speelterreinen);
  }

  sortList(Speelterreinen: Feature[]){
    Speelterreinen.sort((a,b) => a.attributes.naam.localeCompare(b.attributes.naam));
}


  // getTodoById(id: number): Feature {
  //   return this.Speelterreinen.filter(
  //     (speelterrein) => speelterrein.attributes.OBJECTID === id
  //   ).pop();
  // }
}
