import { Character } from './interfaces/characters';
import { RickAndMortyService } from './service/api-service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  characters: Character[];

  constructor(private service: RickAndMortyService) { }

  ngOnInit() {
    this.service.getAllCharacter().subscribe(dados => this.characters = dados.results);
    console.log(this.characters);
  }
}
