var counter = 0;
function add(a, b) {
    return a + b;
}
function increment() {
    counter++;
    return counter;
}
console.log("test");
console.log(add(2, 3));
console.log(add(2, 3));
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

// add est prévisible car c’est une fonction pure :
// à paramètres identiques (a, b), elle retourne toujours le même résultat
// et ne dépend d’aucun état externe.

// increment n’est pas prévisible car elle modifie une variable globale (counter) :
// son résultat dépend du nombre de fois où elle a déjà été appelée (effet de bord).
