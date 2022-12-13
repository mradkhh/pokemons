import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Pokemon} from "../../../admin/models/pokemon";
import {PokemonService} from "../../../admin/services/pokemon.service";

@Component({
  selector: 'pok-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit, OnChanges {

  @Input() pokemonId: number = null

  isLoading = false
  pokemon: Pokemon = null

  constructor(private readonly pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('pokemonId' in changes) {
      if (this.pokemonId) {
        this.getPokemonById()
      } else this.pokemon = null
    }

  }

  getPokemonById() {
    this.isLoading = true
    //получить покемона по ID через сервис
    this.pokemonService.getById(this.pokemonId).subscribe(pokemon => {
        this.pokemon = pokemon
      this.isLoading = false
      }
    )
  }
}
