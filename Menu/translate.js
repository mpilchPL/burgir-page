document.addEventListener("DOMContentLoaded", ChangeLanguage)
lang = "en"

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
    
    for(let i = 0; i < text.length; i++){
        if(lang == "en"){
            text[i].innerHTML = englishDictionary[i]
        }
        else if(lang == "pl"){
            text[i].innerHTML = polishDictionary[i]
        }
        
    }
}