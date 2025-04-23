interface Component {
    afficher(indentation?: string): void;
}

class Branche implements Component {
    private _nom: string;
    constructor(nom: string) {
        this._nom = nom;
    }

    afficher(indentation: string = ""): void {
        console.log(`${indentation}- Branche : ${this._nom}`);
    }
}

class SousDepartement implements Component {
    private enfants: Component[] = [];
    private _nom: string;

    constructor(nom: string) {
        this._nom = nom;
    }

    Ajouter(composant: Component): void {
        this.enfants.push(composant);
    }

    afficher(indentation: string = ""): void {
        console.log(`${indentation}+ Sous-département : ${this._nom}`);
        this.enfants.forEach(child => {
            child.afficher(indentation + "  ");
        });
    }
}


const branche1 = new Branche('Web');
const branche2 = new Branche('IT')
const branche3 = new Branche('Ventes')
const branche4 = new Branche('Achats')
const branche5 = new Branche('RH')
const branche6 = new Branche('Comptabilité')
const branche7 = new Branche('Administration')

const sousDepartement1 = new SousDepartement('Secrétariat général');
const sousDepartement2 = new SousDepartement('Département technique');
const sousDepartement3 = new SousDepartement('Département commercial ');
const sousDepartement4 = new SousDepartement('Département financier' );

const Departement = new SousDepartement('Direction Générale' );
Departement.Ajouter(sousDepartement1)
Departement.Ajouter(sousDepartement2)
Departement.Ajouter(sousDepartement3)
Departement.Ajouter(sousDepartement4)
sousDepartement2.Ajouter(branche1);
sousDepartement2.Ajouter(branche2);
sousDepartement3.Ajouter(branche3);
sousDepartement3.Ajouter(branche4);
sousDepartement4.Ajouter(branche5);
sousDepartement4.Ajouter(branche6);
sousDepartement4.Ajouter(branche7);
Departement.afficher();