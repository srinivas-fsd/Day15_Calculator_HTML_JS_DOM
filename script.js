document.addEventListener("DOMContentLoaded", () => {
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    document.body.appendChild(container);

    let h1 = document.createElement("h1");
    h1.textContent = "Calculator App";
    h1.setAttribute("id", "title");
    container.appendChild(h1);

    let p = document.createElement("p");
    p.textContent = "Calculator App Demo with basic arithmetic functions";
    p.setAttribute("id", "description");
    container.appendChild(p);

    let calculator = document.createElement("div");
    calculator.setAttribute("class", "calculator");
    container.appendChild(calculator);

    let input = document.createElement("input");
    input.setAttribute("id", "result");
    input.setAttribute("readonly", true);
    calculator.appendChild(input);

    let displayValues = ['C', '⌫', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0',  '.', '='];
    let buttonsId = ['clear', 'backspace','mod',  'div', '7', '8', '9', 'multi', '4', '5', '6', 'subtract', '1', '2', '3', 'add', '0',  'dot', 'equal'];
    
    let buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    calculator.appendChild(buttons);

    displayValues.forEach((value, index) => {
        let calBtn = document.createElement("button");
        calBtn.textContent = value;
        calBtn.setAttribute("id", buttonsId[index]);
        buttons.appendChild(calBtn);
    });

    // Functions for operations
    let clearInput = () => input.value = '';
    let deleteLastChar = () => input.value = input.value.slice(0, -1);
    let calculateResult = () => {
        try {
            input.value = eval(input.value.replace(/[^-()\d/*+.%]/g, ''));
        } catch {
            input.value = "Error";
        }
    };

    let processInput = (value) => {
        switch (value) {
            case 'C':
                clearInput();
                break;
            case '⌫':
                deleteLastChar();
                break;
            case '=':
                calculateResult();
                break; 
            default:
                input.value += value;
        }
    };

    // Key Down Event
    document.addEventListener("keydown", (event) => {
        let keyMap = {
            '*': '*',
            '/': '/',
            '+': '+',
            '-': '-',
            '.': '.',
            '%': '%',
            'Enter': '=',
            'Escape': 'C',
            'Backspace': '⌫'
        };

        let key = keyMap[event.key] || event.key;

        if (displayValues.includes(key)) {
            processInput(key);
        }
    });

    // Button Click Event
    buttons.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            processInput(event.target.textContent);
           ( ()=>{
                if(event.target.textContent!=='=')
                {
                    let existingBGColor ="#f2f2f2";// event.target.style.backgroundColor;
                    event.target.style.backgroundColor="#f7f30f";
                    setTimeout(() => {
                        event.target.style.backgroundColor=existingBGColor;
                    }, 200);  

                   
                }
                else
                {
                    
                    input.style.backgroundColor="#f7f30f";
                    setTimeout(() => {
                        input.style.backgroundColor="white";
                    }, 200); 
                }
              
           }) ();
        }
    });

    
});

