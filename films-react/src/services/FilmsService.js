export default class FilmsService
{
    static _films = [
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

     getAllFilms() {
         return FilmsService._films;
     }
}