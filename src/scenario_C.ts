interface ControlerActions {
    sauter(): void;
    attaquer(): void;
    interagir(): void;
}


class Clavier {
    private keypressEspace: string;
    private clickGauche: string;
    private clickDroite: string;

    constructor() {
        this.keypressEspace = 'espace';
        this.clickGauche = 'gauche';
        this.clickDroite = 'droite';
    }

    Espace(): void {
        if (this.keypressEspace === 'espace') {
            console.log('ton personnage a sauté');
        }
    }
    ClickGauche(): void {
        if (this.clickGauche === 'gauche') {
            console.log('ton personnage a attaqué l\'ennemi');
        }
    }
    ClickDroit(): void {
        if (this.clickDroite === 'droite') {
            console.log('ton personnage a recueilli une fleur');
        }
    }
}
class ClavierAdaptateur implements ControlerActions {
    private readonly clavier: Clavier;
    constructor(clavier: Clavier) {
        this.clavier = clavier;
    }
    sauter(): void {
        this.clavier.Espace();
    }
    attaquer(): void {
        this.clavier.ClickGauche();
    }
    interagir(): void {
        this.clavier.ClickDroit();
    }
}
class ManetteXbox {
    private KeyPressbtnA: string;
    private KeyPressbtnB: string;
    private KeyPressbtnX: string;

    constructor() {
        this.KeyPressbtnA = 'A';
        this.KeyPressbtnB = 'B';
        this.KeyPressbtnX = 'X';
    }

    BoutonB(): void {
        if (this.KeyPressbtnB === 'B') {
            console.log('ton personnage a sauté');
        }
    }
    BoutonA(): void {
        if (this.KeyPressbtnA === 'A') {
            console.log('ton personnage a attaqué l\'ennemi');
        }
    }
    BoutonX(): void {
        if (this.KeyPressbtnX === 'X') {
            console.log('ton personnage a recueilli une fleur');
        }
    }
}
class ManetteXboxAdaptateur implements ControlerActions {
    private manetteXbox: ManetteXbox;

    constructor(manetteXbox: ManetteXbox) {
        this.manetteXbox = manetteXbox;
    }
    sauter(): void {
        this.manetteXbox.BoutonB();
    }
    attaquer(): void {
        this.manetteXbox.BoutonA();
    }
    interagir(): void {
        this.manetteXbox.BoutonX();
    }
}
class ManettePS5 {
    private KeyPressbtnO: string;
    private KeyPressbtnTriangle: string;
    private KeyPressbtnX: string;

    constructor() {
        this.KeyPressbtnO = 'O';
        this.KeyPressbtnTriangle = 'Triangle';
        this.KeyPressbtnX = 'X';
    }
    BoutonB(): void {
        if (this.KeyPressbtnO === '0') {
            console.log('ton personnage a sauté');
        }
    }
    BoutonA(): void {
        if (this.KeyPressbtnTriangle === 'Triangle') {
            console.log('ton personnage a attaqué l\'ennemi');
        }
    }
    BoutonX(): void {
        if (this.KeyPressbtnX === 'X') {
            console.log('ton personnage a recueilli une fleur');
        }
    }
}
class ManettePS5Adaptateur {
    private manettePS5: ManettePS5;

    constructor(manettePS5: ManettePS5) {
        this.manettePS5 = manettePS5;
    }
    sauter(): void {
        this.manettePS5.BoutonB();
    }
    attaquer(): void {
        this.manettePS5.BoutonA();
    }
    interagir(): void {
        this.manettePS5.BoutonX();
    }
}