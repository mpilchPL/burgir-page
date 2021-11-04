document.addEventListener("DOMContentLoaded", ChangeLanguage)

function PolishFlagClicked(){
    localStorage.setItem("language", "pl");
    ChangeLanguage();
}

function EnglishFlagClicked(){
    localStorage.setItem("language", "en");
    ChangeLanguage();
}
PolishFlagClicked()
function ChangeLanguage(){
    var text = document.getElementsByClassName("text");
    
    var englishDictionary = [
        "Main Page",
        "About Us",
        "Menu",
        "Contact",
        "Book table",
        "No.",
        "Name",
        "Ingredients",
        "Prince (PLN)"
    ]
    
    var polishDictionary = [
        "Strona Główna",
        "O nas",
        "Menu",
        "Kontakt",
        "Zarezerwuj",
        "Nr.",
        "Nazwa",
        "Składniki",
        "Cena (PLN)"

    ]

    var englishIngredients =[
        "Cheese, Tomato sauce",
        "Cheese, Tomato sauce, Salame, Mushrooms",
        "Cheese, Tomato sauce, Mushrooms",
        "Cheese, Tomato sauce, Salame, Jalapeno",
        "Cheese, Tomato sauce, Chicken, Paprika, Mushrooms",
        "Cheese, Tomato sauce, Ham, Pineapple",
        "Nutella, Banana",
        "Frozen cheese, Frozen tomato sauce, Frozen ham",
        "Cheese, Tomato sauce, Ham, Mozarella",
        "Cheese, Tomato sauce, Olives, Feta cheese, Rucola",
        "Cheese, Tomato sauce, Salame, Jalapeno",
        "Cheese, Tomato sauce, Chicken, Paprika, Mushrooms",
        "Cheese, Tomato sauce, Ham, Chicken, Salame, Mozarella",

    ]

    var polishIngredients =[
        "Ser, Sos pomidorowy",
        "Ser, Sos pomidorowy, Salami, Pieczarki",
        "Ser, Sos pomidorowy, Pieczarki",
        "Ser, Sos pomidorowy, Salami, Jalapeno",
        "Ser, Sos pomidorowy, Kurczak, Papryka, Pieczarki",
        "Ser, Sos pomidorowy, Szynka, Ananas",
        "Nutella, Banan",
        "Mrożony Ser, Mrożony Sos pomidorowy, Mrożony Szynka",
        "Ser, Sos pomidorowy, Szynka, Mozarella",
        "Ser, Sos pomidorowy, Salami, Jalapeno",
        "Ser, Sos pomidorowy, Kurczak, Papryka, Pieczarki",
        "Ser, Sos pomidorowy, Oliwki, Ser feta, Rukola",
        "Ser, Sos pomidorowy, Szynka, Kurczak, Salami, Mozarella",
    ]
    

    var englishBurgir = [
        "Main Page",
        "About Us",
        "Menu",
        "Contact",
        "Book table",
    ]

    var polishBurgir = [
        "Strona Główna",
        "O nas",
        "Menu",
        "Kontakt",
        "Zarezerwuj",
    ]

    
    for(let i = 0; i < text.length; i++){
        if(localStorage.getItem("language") == "en"){
            text[i].innerHTML = englishDictionary[i]
        }
        else{
            text[i].innerHTML = polishDictionary[i]
        }
        
    }

    var ingredients = document.getElementsByClassName("ingredients");

    for(let i = 0; i < ingredients.length; i++){
        if(localStorage.getItem("language") == "en"){
            ingredients[i].innerHTML = englishIngredients[i]
        }
        else{
            ingredients[i].innerHTML = polishIngredients[i]
        }
        
    }

    var burgir = document.getElementsByClassName("burgirText")

    for(let i = 0; i < burgir.length; i++){
        if(localStorage.getItem("language") == "en"){
            burgir[i].innerHTML = englishBurgir[i]
        }
        else{
            burgir[i].innerHTML = polishBurgir[i]
        }
        
    }
}