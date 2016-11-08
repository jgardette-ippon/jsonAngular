import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2/index';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})

export class DossierComponent {
  dossiers: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) { 
    this.dossiers = af.database.list('export/dossiersLegislatifs/dossier');
  }
}
