import { Component } from '@angular/core';
import { PokemetServicioService } from '../services/pokemet.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private propokemon:PokemetServicioService) {}
  ngOnInit(){
    this.propokemon.getpokeMetodo().subscribe( Respuestapoke => {
      console.log(Respuestapoke);
      
    })
    }


}
