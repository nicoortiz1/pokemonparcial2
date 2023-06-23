import { Component, OnInit } from '@angular/core';
import { Tab1Page } from '../tab1.page';
import { PokeServicioService } from 'src/app/services/pokemet.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listapoke',
  templateUrl: './listapoke.page.html',
  styleUrls: ['./listapoke.page.scss'],
})
export class ListapokePage implements OnInit {

  constructor(private PokeServicioService:PokeServicioService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    /*this.PokeServicioService.getNamePoke(this.PokeServicioService.infoName).subscribe(respuestaPokemon =>{
      console.log(respuestaPokemon);
    })*/
    console.log(this.PokeServicioService.infoName);
  }

  

}
