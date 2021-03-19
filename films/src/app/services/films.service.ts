import { Injectable } from '@angular/core';
import { IFilm } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private static _films: IFilm[] = [
    {
      name: "Some film 1",
      year: 2000,
      actors: [{name: "Actor 1", character: "Character 1"}, {name: "Actor 2", character: "Character 2"}],
      producer: "Producer 1"
    },
    {
      name: "Some film 2",
      year: 2001,
      actors: [{name: "Actor 2", character: "Character 3"}],
      producer: "Producer 1"
    }
  ];

  constructor() { }

  public getAllFilms() {
      return FilmsService._films;
  }
}
