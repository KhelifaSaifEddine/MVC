//////dans importation il faut utiliser .js a la fin du chemin////
import {modele} from "./Modele.js"//<----
import {controlleur} from "./Controlleur.js"
import {controlleur_1} from "./Controlleur.js"
import {controlleur_2} from "./Controlleur.js"

class View{
    afficher(Etat_modele){
      document.getElementById("demo").innerHTML = Etat_modele
    }
}
//////Dans importation et exportation il faut toujours mettre 
////// "let" ou bien "var" quand vous declarez les variable////

var view = new View()

modele.AjouterAbonn(view)
const sumbit = document.querySelector(".submit")
sumbit.addEventListener('click',function(){
    const select = document.getElementById("ChoixLivraison")
    const choix = select.options[select.selectedIndex].value
    switch (choix) {
        case "ups":
                controlleur.setStrategy(controlleur_1)
            break;
        case "usps":
            controlleur.setStrategy(controlleur_2)
        break;
        default:
            break;
    }
    controlleur.Changer(modele)
})



///modele.SetEtat("Etat 0") ////Changer etat manuelllement//
