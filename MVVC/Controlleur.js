class Controlleur{
    #Strategy 
    setStrategy(Strategy){
        this.#Strategy = Strategy
    }
    Changer(objet_modele ){
        console.log(objet_modele)
        this.#Strategy.Changer(objet_modele)
    }
}

class Controlleur1{
    Changer(objet_modele){
        objet_modele.SetEtat("NOUVELLE ETAT DU CONTROLLEUR 1")
    }
}


class Controlleur2{
    Changer(objet_modele){
        objet_modele.SetEtat("NOUVELLE ETAT DU CONTROLLEUR 2")

    }
}

export const controlleur = new Controlleur()
export const controlleur_1 = new Controlleur1()
export const controlleur_2 = new Controlleur2()