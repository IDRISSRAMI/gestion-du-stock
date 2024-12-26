const product = require("./product")
const prompt = require("prompt-sync")()
const fs = require("fs")
let prod = JSON.parse(fs.readFileSync("fa.json", "utf8"))
 

class invertory {

    ajouter() {
        let produit = new product();
        produit.name = prompt("enter le name:") //declarer variable produit.name pour que l utilisateur ystoki lina l valeur
        if (!produit.name) {
            console.log("RESSAYER name de produits")
            
        }
        produit.description = prompt("entre le description :")
        produit.quantity = Number(prompt("enter le quantiter :"))
        produit.price = Number(prompt("enter le price :"))
        prod.push(produit)
        //console.log(prod)
        fs.writeFileSync("fa.json", JSON.stringify(prod, null, 2));

    }
    afficher() {
        const da = fs.readFileSync("fa.json", "utf8")
        const donner = JSON.parse(da)
        donner.map((item, index) => {
            
            console.log(`\nPRODUCT NUMBER ${index + 1}\n name :${item.name} \n description :${item.description} \n quantity :${item.quantity} \n price :${item.price}`)
            
            // console.log("product number: ", index + 1)
            // console.log("product name: ", item.name)
            // console.log("product description: ", item.description)
            // console.log("product quantity: ", item.quantity)
            // console.log("product price: ", item.price)
        })
    }
    suprrimer() {
        
        let produitSupp = parseInt(prompt("entrer produit a supprimer: "));
        if (produitSupp >= 0) {
            prod.splice(produitSupp - 1, 1);
            fs.writeFileSync("fa.json", JSON.stringify(prod));
        }
    }
    modifier() {
        
        let id = prompt("donner la valeur id pour modifier:")
        if (id >= 0) {
            prod[id - 1].name = prompt("enter nouveau nom: ");
            prod[id - 1].description = prompt("enter nouveau description: ");
            prod[id - 1].price = Number(prompt("enter le price: "));
            prod[id - 1].quantity = Number(prompt("enter le Qunatite: "));
            fs.writeFileSync("fa.json", JSON.stringify(prod, null, 4));
        }
    }
}
const Tn = new invertory();
do {
    console.log("\n1=Ajouter un produit")
    console.log("2=Afficher tous les produits.")
    console.log("3=supprimer un produit.")
    console.log("4=Modifier un produit.")
    console.log("5=quitter")
    const choix = prompt("enter le choix avec le menu ");
    switch (choix) {
        case "1":
            Tn.ajouter()
            break;
        case "2":
            Tn.afficher()
            break;
        case "3":
            Tn.suprrimer()
            break;
        case "4":
            Tn.modifier()
            break;
        case "5":
            return;
        default:
            console.log("entree le nunber avec le choix")

    }
} while (true)