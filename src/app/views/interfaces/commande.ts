export interface Commande {
    id_p: number;
    quantite: number;
    date_fourni: string;
}

export class Commande implements Commande {
    constructor(
        public id_p: number,
        public quantite: number,
        public date_fourni: string
    ){}
}
