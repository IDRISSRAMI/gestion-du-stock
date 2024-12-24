const product=require("./product")
const prompt=require("prompt-sync")()
const fs =require("fs")
let prod=[]
class invertory {
    
    ajouter(){
        let produit=new product()
        produit.name=prompt("enter le name:")
        if(!produit.name){
       console.log("entre name de produits")
       return
        }
        produit.description=prompt("entre le description :")
        produit.quantity=Number(prompt("enter le quantiter :"))
        produit.price=Number(prompt("enter le price :"))
        prod.push(produit)
        //console.log(prod)
        fs.writeFileSync("crud.json", JSON.stringify(prod, null, 2));

    }
afficher(){
    const da=fs.readFileSync("crud","utf8")
    const donner=JSON.parse(da)
const data=donner.map((item,index)=>{
    console.log(`${index+1} name :${item.name} \n description :${item.description} \n quantity :${item.quantity} \nprice :${item.price}`)
})
console.log(data)
}
suprrimer(){
    let produit=new product()
    produit.id=prompt("donner le valeur id peur suprimer")  
    if(produit.id >=0){
        prod.splice(produit.id-1,1)
        fs.writeFileSync("crud.json",JSON.stringify(prod))
    }
}
modifier(){
    let produit=new product()
    produit.id=prompt("donner le valeur id pour modifier:")  
    if(produit.id>=0){
prod[produit.id-1][" produit.name"]
prod[produit.id-1].description
prod[produit.id-1].name=prompt("enter le name")
prod[produit.id-1].price=prompt("enter le name")
fs.writeFileSync("crud.json",JSON.stringify(prod))
    }
}
}
const Tn=new invertory()
do{
    console.log("1=Ajouter un produit")
    console.log("2=Afficher tous les produits.")
    console.log("3=Mettre à jour un produit.")
    console.log("4=Supprimer un produit.")
    console.log("5=quitter")
  const choix=prompt("enter le choix avec le menu ");
  switch(choix){
    case"1":
       console.log(Tn.ajouter())
       break;
       case"2":
       console.log(Tn.afficher())
       break;
       case"3":
       console.log(Tn.deletP())
       break;
     case "4":
        console.log(Tn.modifier())
        break;
    case"5":
       return
       break
    default:
        console.log("entree le nunber avec le choix")
    
  }
}while(true)