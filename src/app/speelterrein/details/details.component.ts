import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feature } from 'src/app/Interfaces/ispeelterrein-detail';
import { SpeelterreinService } from 'src/app/Services/speelterrein.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public speelterreinen: Feature[] = [];
  public speelterrein: Feature;
  private id: number;

  constructor(
    private _speelterrein: SpeelterreinService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['OBJECTID'];

    this._speelterrein.find(this.id).subscribe(data => this.speelterrein = data.feature);

    console.log(this.speelterrein);

  }

  // getSpeelterrein(id: number) {
  //   this.speelterrein = this.speelterreinen.find(
  //     (x) => x.attributes.OBJECTID === id
  //   );
  // }
}
