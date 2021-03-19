import FilmsService from '../services/FilmsService';
import React, { Component } from 'react';

class Films extends Component{

    constructor() {
      super();

      this.state = {films:new FilmsService().getAllFilms()}
    }

    render() {
        return (
            <div>
            {this.state.films.map(film => (
                <div style={{marginBottom: 20 + "px"}}>
                <div>Назва: {film.name}</div>
                <div>Рік: {film.year}</div>
                <div>Продюсер: {film.producer} </div>
                Актори:
                {film.actors.map(actor => (
                    <div>
                         <div>Ім'я: {actor.name}</div>
                         <div>Персонаж: {actor.character}</div>
                    </div>
                ))}
                </div>
            ))}
    
        <div style={{marginBottom: 20 + "px"}}>
            <div>Назва: <input /> </div>
            <div>Рік: <input type="number"/> </div>
            <div>Продюсер:  <input/> </div>
            <button>Створити</button>
        </div>
        
        <select >
            <option key="empty"></option>
            {
                this.state.films.map(film => (
                    <option key={film.name}>{film.name}</option>
                ))
            }
        </select>
        <div>
            <div>Назва: <input /> </div>
            <div>Рік: <input type="number"  /> </div>
            <div>Продюсер:  <input /> </div>
            <button >Редагувати</button>
        </div>
        </div>
        );
    }
}

export default Films;