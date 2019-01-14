import { Component, OnInit, ViewChild } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/modeles/offre';

@Component({
  selector: 'app-liste-offres',
  templateUrl: './liste-offres.component.html',
  styleUrls: ['./liste-offres.component.css']
})
export class ListeOffresComponent implements OnInit {

  offres: Offre[];

  constructor(private offreService: OffreService) { }

  getColor(active) { (2)
    if (active == true) {
      return "green";
    } else {
      return "red";
    }
  }


  ngOnInit() {
    this.offreService.getAllOffres().subscribe
      (data => { this.offres = data; console.log(this.offres) });
  };
}


