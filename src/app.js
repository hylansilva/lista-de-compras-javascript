// criando o array onde vou adicionar os itens
let products = [{

}];

// importando os elementos do html
const itemImput = document.getElementById("itemInput");
const amountInput = document.getElementById("amountInput")
const priceInput = document.getElementById("priceInput");
const addItem = document.getElementById("addItem");
const clearList = document.getElementById("clearList");
const productColumn = document.getElementById("productColumn");
const amountColumn = document.getElementById("amountColumn");
const priceColumn = document.getElementById("priceColumn");

// Função que cria um item da lista

const createListItem = (productColumn, amountColumn,priceColumn, products) =>{
    productColumn.innerHTML = "";
    amountColumn.innerHTML = "";
    priceColumn.innerHTML = "";
    // função que percorre a quantidade de produtos dentro do array
    for(let i = 0; i < products.length; i++){
        const item = document.createTextNode(products[{nome:i}]);
        const amount = document.createTextNode(products[{quantidade:i}]);
        const value = document.createTextNode(products[{valor:i}]);
        const listItem = document.createElement("td");
        const listAmount = document.createElement("td");
        const listPrice = document.createElement("td");
        listItem.appendChild(item);
        listAmount.appendChild(amount);
        listPrice.appendChild(value);
        productColumn.appendChild(listItem);
        amountColumn.appendChild(listItem);
        priceColumn.appendChild(listItem);
    }
};

// Função de adicionar

const hndBtnAddItem = () =>{
    const item = itemImput.value;
    const amount = amountInput.value;
    const price = priceInput.value;
    if(!item){
        alert("Por favor digite um item!");
        return
    }
    if(!amount){
        alert("Por favor digite a quantidade");
        return
    }

    if(!price){
        alert("Por favor digie um preço");
        return
    }
    products.push(item);
    itemImput.value = "";
    amountInput.value = "";
    priceInput.value = "";
    
    createListItem(productColumn, amountColumn,priceColumn,products);
};

// Função de Apagar todos os itens da lista

const hndBtnClearList = () =>{
    itemImput.value = "";
    products = [];
    productColumn.innerHTML ="";
    itemImput.focus();
};

// Adicionando as funções aos seus determinados botões

addItem.onclick = hndBtnAddItem;
clearList.onclick = hndBtnClearList;