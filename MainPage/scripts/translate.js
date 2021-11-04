document.addEventListener("DOMContentLoaded", ChangeLanguage)

const pl = document.getElementById("pl");
const en = document.getElementById("en")
pl.addEventListener("click", PolishFlagClicked);
en.addEventListener("click", EnglishFlagClicked);

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
        "About us",
        "Menu",
        "Contact",
        "Book table",
        "Book table online!",
        "Or call: <span id='tel-number'>12 345 67 89</span> ",
        "Meet us",
        "The best frozen pizza in Poland.",
        "... or at least in Suwałki"

    ]
    
    var polishDictionary = [
        "Strona Główna",
        "O nas",
        "Menu",
        "Kontakt",
        "Zarezerwuj",
        "Zamów stolik online!",
        "Lub zadzwoń: <span id='tel-number'>12 345 67 89</span>",
        "Poznaj nas",
        "Najlepsza pizza z zamrażary w Polsce.",
        "...albo przynajmniej w Suwałkach."
    ]


    var englishBurgir = [
        "Main Page",
        "Menu",
        "Contact",
        "Book table",
    ]

    var polishBurgir = [
        "Strona Główna",
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