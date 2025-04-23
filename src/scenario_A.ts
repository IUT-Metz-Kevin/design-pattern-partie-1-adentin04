class Singleton {

    static #instance: Singleton;
    private _difficulte : number;
    private _langue : string;
    private _volMus : number;
    private _volEffSon:number;
    private _resoEcran:string;
    private _qualiGraphi:number;
    constructor() {
this._difficulte=2;
this._langue='English';
this._volMus=50;
this._volEffSon=50;
this._resoEcran="1080";
this._qualiGraphi=48;


    }
    public static getInstance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }

        return Singleton.#instance;
    }
    public parametresGameplay(difficulte: number, langue: string) {
        this._difficulte = difficulte;
        this._langue = langue;
        switch (difficulte) {
            case 1:
                console.log('Facile');
                break;
            case 2:
                console.log('Normal');
                break;
            case 3:
                console.log('Difficile');
                break;


        }
        
        switch (langue) {
            case 'Italien':
                console.log('La langue du jeux est maintenant en italien');
                break;
            case 'Français':
                console.log('La langue du jeux est maintenant en FRançais');
                break;
            case 'Anglais':
                console.log('La langue du jeux est maintenant en ANglais');
                break;


        }
        
    }
    public parametresAudio(volMus:number, volEffSon:number){
       this._volMus = volMus;
       this._volEffSon = volEffSon;
       console.log('Le volume est a ', this._volMus, 'et le volume des effets sonores est ', this._volEffSon);
       
    }
    public parametresGraphiques(ResoEcran:string, QualiGraphi:number){
        this._resoEcran = ResoEcran;
        this._qualiGraphi = QualiGraphi;
        console.log('Le volume est a ', this._volMus, 'et le volume des effets sonores est ', this._volEffSon);
     }


}
let Difficulté = Number(prompt('quel difficulté? 1, 2 ou  3?'))
let Langue = prompt('quel langue? Italien, Français ou Anglais?')!
let Musique = Number(prompt('quel niveau pour la musique ? tu as le choix entre 0 et 100'))
let EffetsSonores = Number(prompt('quel niveau pour ls effets sonores ? tu as le choix entre 0 et 100'))
let Resolution = (prompt('quel niveau pour la musique ? tu as le choix entre 0 et 100'))!
let Qualite = Number(prompt('quel niveau pour ls effets sonores ? tu as le choix entre 0 et 100'))
const instance1 = Singleton.getInstance();

instance1.parametresGameplay(Difficulté,Langue);

instance1.parametresAudio(Musique,EffetsSonores);

instance1.parametresGraphiques(Resolution,Qualite);