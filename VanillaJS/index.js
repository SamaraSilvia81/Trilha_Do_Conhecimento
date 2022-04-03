const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");
    
    if(inputElement.value){
        
        const textElement = document.createElement("span");
        textElement.innerHTML = inputElement.value;
        
        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Remover";
        
        const liElement = document.createElement("li");
        liElement.appeendChild(textElement);
        liElement.appeendChild(btnElement);
        
        btnElement.onclick = () => {
            ulElement.removeChild(liElement)
        }
        
        ulElement.appeendChild(btnElement);
        inputElement.value = "";
    };

