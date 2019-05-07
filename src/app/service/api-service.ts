import { ResultsCharacter } from './../interfaces/characters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable ({
    providedIn: 'root'
})
export class RickAndMortyService {

    private readonly API = 'https://rickandmortyapi.com/api/character';

    constructor(private http: HttpClient) {}

    getAllCharacter() {
        return this.http.get<ResultsCharacter>(this.API);
    }
}