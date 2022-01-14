class Modele{
    #Etat
    constructor(param){
        this.#Etat = param
    }
    liste_abonne = []
    AjouterAbonn(param)
    {
            this.liste_abonne.push(param)
    }
    SupprimerAbonne(Abonne_chercher){
        this.liste_abonne = this.liste_abonne.filter(filtrage)
        function filtrage(abonne){
            if(Abonne_chercher != abonne ){
                return abonne
            }
        }
    }
    NotifieAbonne(){
        for (let i = 0; i < this.liste_abonne.length; i++) {
            const element = this.liste_abonne[i];
                element.afficher(this.#Etat)
        }
    }
    SetEtat(param){
        this.#Etat = param
        this.NotifieAbonne()
    }
    getEtat(){
        return this.#Etat
    }
}

export const modele = new Modele("ETAT 0")