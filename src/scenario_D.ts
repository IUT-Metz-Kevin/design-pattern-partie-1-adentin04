interface Boisson {
    nom(): string;

    prix(): number;
}

class Cafe implements Boisson {
    nom(): string {
        return 'café';
    }

    prix(): number {
        return 1.5;
    }
}
abstract class BoissonDecorateur implements Boisson {
    boisson: Boisson;

    constructor(boisson: Boisson) {
        this.boisson = boisson;
    }

    abstract nom(): string;

    abstract prix(): number;
}

class Lait extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    nom(): string {
        return this.boisson.nom() + ', lait';
    }

    prix(): number {
        return this.boisson.prix() + 1;
    }
}
class LaitDeCoco extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    nom(): string {
        return this.boisson.nom() + ', Lait de coco';
    }

    prix(): number {
        return this.boisson.prix() + 2;
    }
}
class Chantilly extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    nom(): string {
        return this.boisson.nom() + ', Chantilly';
    }

    prix(): number {
        return this.boisson.prix() + 1;
    }
}
class SaveurVanille extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    nom(): string {
        return this.boisson.nom() + ', Vanille';
    }

    prix(): number {
        return this.boisson.prix() + 0.5;
    }
}
class Sucre extends BoissonDecorateur {
    constructor(boisson: Boisson) {
        super(boisson);
    }

    nom(): string {
        return this.boisson.nom() + ', Sucre';
    }

    prix(): number {
        return this.boisson.prix();
    }
}

let maBoisson: Boisson = new Cafe();
maBoisson = new Lait(maBoisson);
maBoisson = new Chantilly(maBoisson);
console.log(maBoisson.nom());
console.log(maBoisson.prix()); 