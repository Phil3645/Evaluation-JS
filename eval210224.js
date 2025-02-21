//Demander à l'utilisateur son prénom et affichez le message de bienvenue à l'aide d'une alert :
alert('Bonjour, bienvenue dans votre gestionnaire de tâches.')

//Créer une variable contenant le prénom "Krystof" et affichez le message suivant dans la console : 
let firstname="Krystof";
console.log(firstname);

//Créer un tableau "taches" initialisé avec trois taches par défaut 
// ("faire la vaisselle", "déposer le colis", "récupérer les enfants à l'école").
const taches = ["faire la vaisselle", "déposer le colis", "récupérer les enfants à l'école"]
console.log(taches);
console.log(taches[0]);
console.log(taches[1]);
console.log(taches[2]);

//Afficher les taches actuelles dans la console.

//Demander à l'utilisateur d'ajouter deux nouvelles tâches 
// afin de les stocker dans le tableau.
const tache = ["faire la vaisselle", "déposer le colis", "récupérer les enfants à l'école"];
let newtache = "Vider les poubelles";
let newtaches = "nettoyer les surfaces";
let newstaches= "déposer le colis";

taches.push(newtache);
console.log(taches);

taches.push(newtaches);
console.log(taches);

taches.push(newstaches);
console.log(taches);

//Afficher de nouveau la liste de taches.
console.log(taches);
console.log(taches[0]);
console.log(taches[1]);
console.log(taches[2]);
console.log(taches[3]);
console.log(taches[4]);
console.log(taches[5]); // tache en double

//Créer un objet "statistiques" pour stocker :
let statistiques = {
    list_taches: taches,
    nombredetache: taches.length
}
console.log(statistiques);

// Afficher dans la console, le nombre total de taches 
// à l'aide de la propriété de l'objet en utilisant les deux méthodes différentes.


// Transformer ensuite le tableau de tâches en une Set pour 
// supprimer les doublons.



//Afficher les tâches uniques.

//Afficher un message dans la console : "Liste des tâches complètes".

// Projet 2 

let notes = [12, 15, 8, 10, 17];

//Vous devez effectuer les opérations suivantes :
//Ajouter 2 points à la note de chaque élève
let a = 12;
let b = 2;
let total = a + b;
console.log(total);

let c = 15;
let d = 2;
let total1 = c + d;
console.log(total1);

let e = 8;
let f = 2;
let total2 = e + f;
console.log(total2);

let g = 10;
let h = 2;
let total3 = g + h;
console.log(total3);

let aa = 17;
let ab = 2;
let total4 = aa + ab;
console.log(total4);

//Calculer la somme totale des notes du tableau 
// (après avoir ajouté les 2 points)
let az = 14;
let bz = 17;
let cz = 10;
let dz = 12;
let ez = 19
let total5 = az + bz + cz + dz + ez;
console.log(total5);


//Calculer la moyenne des notes

let x = 72;
let y = 20;
let total6 = x % y;
console.log(total6);

//Remplacer la dernière note par la valeur 20

notes.splice(4, 1, 20);
console.log(notes);

//Extraire uniquement les trois premières notes dans un nouveau tableau

notes.slice(0,2);
console.log(notes);


// Prime Bonus 

//Ajouter un coefficient suivant les règles suivantes :
//mettre un coefficient de 0.5 pour les notes entre 0 et 5 (non inclus)

notes = 3
let notesAvecCoef = (notes * 0.5)
console.log(notesAvecCoef);

//mettre un coefficient de 1.1 pour les notes entre 5 et 10 (inclus)

notes = 8
let notesAvecCoef1 = (notes * 1.1)
console.log(notesAvecCoef1);

//Si le nombre de notes en dessous de 10 est supérieur à plus de la moitié des notes
//appliquer un coefficient de 1.3 aux notes supérieures à 10 (non inclus)
notes = 20
let notesAvecCoef2 = (notes *1.3)
console.log(notesAvecCoef2);








