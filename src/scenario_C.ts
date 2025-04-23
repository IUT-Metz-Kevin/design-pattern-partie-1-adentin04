interface ControlerActions{
    sauter():void;
    attaquer():void;
    interagir():void;
}


class Clavier implements ControlerActions {
    private keypressEspace:string;
    private clickGauche:string;
    private clickDroite:string;

constructor(){

}

Espace(): void {
    if(this.keypressEspace==='espace'){
        console.log('ton personnage a sauté');
    }
}
ClickGauche(): void {
    if(this.clickGauche==='gauche'){
        console.log('ton personnage a attaqué l\'ennemi');
    }
}
ClickDroit(): void {
    if(this.clickDroite==='droite'){
        console.log('ton personnage a recueilli une fleur');
    }
}
}

class ManetteXbox{
    private KeyPressbtnA:string;
    private KeyPressbtnB:string;
    private KeyPressbtnX:string;

constructor(){

}

BoutonB(): void {
    if(this.KeyPressbtnB==='B'){
        console.log('ton personnage a sauté');
    }
}
BoutonA(): void {
    if(this.KeyPressbtnA==='A'){
        console.log('ton personnage a attaqué l\'ennemi');
    }
}
BoutonX(): void {
    if(this.KeyPressbtnX==='X'){
        console.log('ton personnage a recueilli une fleur');
    }
}
}
class ManetteXboxAdaptateur{}
class ManettePS5{
    private KeyPressbtnO:string;
    private KeyPressbtnTriangle:string;
    private KeyPressbtnX:string;

constructor(){

}
    BoutonB(): void {
        if(this.KeyPressbtnO==='B'){
            console.log('ton personnage a sauté');
        }
    }
    BoutonA(): void {
        if(this.KeyPressbtnTriangle==='A'){
            console.log('ton personnage a attaqué l\'ennemi');
        }
    }
    BoutonX(): void {
        if(this.KeyPressbtnX==='X'){
            console.log('ton personnage a recueilli une fleur');
        }
    }
}
class ManettePS5Adaptateur{}