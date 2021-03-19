export interface IFilm {
    name: string;
    year: number;
    producer: string;
    actors: IActor[]
}

export interface IActor {
    name: string;
    character: string;
}