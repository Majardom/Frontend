import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilm } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public name: string;
  
  public year: number;

  public producer: string;

  public editName: string;
  
  public editYear: number;

  public editProducer: string;

  public films: IFilm[];

  private _filmToEdit: IFilm;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.films = this.filmsService.getAllFilms();
  }

  createFilm() {
      
      const film: IFilm = {
        name: this.name,
        producer: this.producer,
        year: this.year,
        actors: []
      }

      this.films.push(film);
  }

  onChange(value: string)
  {
    this._filmToEdit = this.films.filter(x => x.name == value)[0];

    if (!this._filmToEdit)
    {
      this.editName = "";
      this.editYear = null;
      this.editProducer = "";
      return;
    }


    this.editName = this._filmToEdit.name;
    this.editYear = this._filmToEdit.year;
    this.editProducer = this._filmToEdit.producer;
  }

  editFilm() 
  {
    if(!this._filmToEdit)
      return;

    this._filmToEdit.name = this.editName;
    this._filmToEdit.year = this.editYear;
    this._filmToEdit.producer = this.editProducer;
  }

}
