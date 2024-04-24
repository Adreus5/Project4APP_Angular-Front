
export interface Film {

  id?: bigint
  nomFilm: string
  genre: string
  langue : string
  synopsis : string
  noteFilms?: NoteFilm[]  // Ajouter cette ligne pour les notes sur les films
}
export interface NoteFilm {
  id: number
  note: number
  commentaire: string
  utilisateurId: number  // Si nécessaire pour référencer l'utilisateur
}
