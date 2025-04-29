interface IAttaquer {
    attaquer(): void;
}

class Guerrier implements IAttaquer {
    attaquer(): void {
        console.log("Attaque avec une épée !");
    }
}

class Magicien implements IAttaquer {
    attaquer(): void {
        console.log("Attaque avec un sort !");
    }
}

class Archer implements IAttaquer {
    attaquer(): void {
        console.log("Attaque avec un arc !");
    }
}

class FabriquerPersonnage {
    creer(type: string): IAttaquer {
        switch (type.toLowerCase()) {
            case "guerrier":
                return new Guerrier();
            case "magicien":
                return new Magicien();
            case "archer":
                return new Archer();
            default:
                throw new Error("Type de personnage inconnu");
        }
    }
}
const fabrique = new FabriquerPersonnage();
const perso = fabrique.creer("magicien");
perso.attaquer();