/* objeto productos 
class product {
    constructor(id, name, genre, artist, price, stock){
        this.id = parseInt(id);
        this.name = name.toUpperCase();
        this.genre = genre.toLowerCase();
        this.artist = artist.toUpperCase();
        this.price = parseInt(price);
        this.stock = stock;
    }
    totalPrice(){
        return this.price + (this.price * 0.21)
    }
    GetStock(){
        return this.stock;
    }
    venta(){
        return this.stock = this.stock -1
    }
    discount(){
        return (this.price + (this.price * 0.21)) - (this.price * 0.50)
    }
}

const justiceAlbum = new product("0001", "Justice", "Pop", "Justin Bieber","1200", 90)
const happierThanEverAlbum = new product("0001", "0002", "Happier Than Ever", "Pop", "Billie Eilish", "1100", 80)
const postHumanSurvivalHorrorAlbum = new product("0003", "Post Human Survival Horror", "Metal", "Bring me the Horizon", "900", 34)
const metallicaAlbum = new product("0004", "Metallica", "Metal", "Metallica", "1000", 0)



var productArray = [justiceAlbum, happierThanEverAlbum, postHumanSurvivalHorrorAlbum, metallicaAlbum]
console.log(productArray)
*/


/* objeto usuario 
let mail = prompt("Please enter your email address");
let password = prompt("Please enter your password");
let username = prompt("Please enter your username");

class Username{
    constructor(mail, password, username){
        this.mail = mail;
        this.password = password;
        this.username = username;
    }
}

let login = new Username(mail, password, username)
console.log (login)

var userArray = [
    login,
    login,
    login,
]
*/


/* CALCULO CUOTAS
let productPrice = parseInt(prompt("Escriba un precio"));
let cantidadCuotas = parseInt(prompt("Elija 3 o 6 cuotas"));

function calculoCuotas (productPrice, cantidadCuotas) {
    if (cantidadCuotas == 3){
        let total = productPrice / 3;
        alert("El total en tres cuotas es de " + total)
    }
    else if (cantidadCuotas == 6){
        let total = productPrice / 6;
        alert("El total en seis cuotas es de " + total)
    }
}
calculoCuotas(productPrice, cantidadCuotas);
*/

/* CALCULO IVA
let precio = parseInt(prompt("Escriba un precio para que sea calculado + IVA"))

const calculoIva  = (precio,iva) => precio + iva;
const iva   = precio => precio * 0.21;

let nuevoPrecio = calculoIva(precio, iva(precio));

console.log("El precio total es de " + nuevoPrecio);
*/
