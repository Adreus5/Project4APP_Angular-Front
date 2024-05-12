
export interface Lieu {
  id?: bigint
  nom: string
  adresse: string
  ville: string
  typeLieu : string
  description : string
  noteLieus?: NoteLieu[]  // Ajouter cette ligne pour les notes sur les lieux
}

export interface NoteLieu {
  id?: number;
  note: number;
  commentaire: string;
  lieuId: number;
  utilisateurId: number;
}
