/* objeto productos  */
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

const justiceAlbum = new product("01", "Justice", "Pop", "Justin Bieber","1200", 90)
const happierThanEverAlbum = new product("02", "Happier Than Ever", "Pop", "Billie Eilish", "1100", 80)
const postHumanSurvivalHorrorAlbum = new product("03", "Post Human Survival Horror", "Metal", "Bring me the Horizon", "900", 34)
const metallicaAlbum = new product("04", "Metallica", "Metal", "Metallica", "1000", 0)



var productArray = [justiceAlbum, happierThanEverAlbum, postHumanSurvivalHorrorAlbum, metallicaAlbum]
console.log(productArray)

const localStorage = (productArray) => {localStorage.setItem(productArray, [01, 02, 03, 04])};
localStorage("listaProductos", JSON.stringify(productArray));

/* objeto usuario */
class Username{
    constructor(mail, password, username){
        this.mail = mail;
        this.password = password;
        this.username = username;
    }
}

let login = new Username(mail, password, username)


var userArray = [
    login,
    login,
    login,
]
const localStorage = (userArray) => {localStorage.setItem(userArray)}
localStorage("listaUser", JSON.stringify(userArray));