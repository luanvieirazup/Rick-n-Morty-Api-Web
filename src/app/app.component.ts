import { Character, ResultsCharacter } from './interfaces/characters';
import { RickAndMortyService } from './service/api-service';
import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  characters: Character[];
  teste: ResultsCharacter;

  constructor(private service: RickAndMortyService) { }

  ngOnInit() {
    this.service.getAllCharacter().subscribe(dados => this.characters = dados.results);
    console.log(this.characters);
  }

  endScroll() {
    this.service.getAllCharacter().subscribe(dados => this.characters = dados.results);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.endScroll();
        console.log(this.characters);
      }
  }
}
