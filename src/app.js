// criando o array onde vou adicionar os itens
let products = [];

// importando os elementos do html
const itemImput = document.getElementById("itemInput");
const amountInput = document.getElementById("amountInput");
const priceInput = document.getElementById("priceInput");
const addItem = document.getElementById("addItem");
const clearList = document.getElementById("clearList");
const tbody = document.getElementById("tbody");
let tr;
// Função que escreve o item na lista
const createListItem = (products) =>{
    tbody.innerHTML = ""; // remove todas as linhas existentes da tabela antes de recriá-las

    for(let i = 0; i < products.length; i++) {
        // criando as linhas da tabela
        const listItem = document.createElement("td");
        const listAmount = document.createElement("td");
        const listPrice = document.createElement("td");
        const item = document.createTextNode(products[i].name);
        const amount = document.createTextNode(products[i].amont);
        const value = document.createTextNode(products[i].price);

        // atribuindo o valor de cada item a linha da tabela
        listItem.appendChild(item);
        listAmount.appendChild(amount);
        listPrice.appendChild(value);

        // criando uma nova linha para este item
        tr = document.createElement("tr");
        tr.appendChild(listItem);
        tr.appendChild(listAmount);
        tr.appendChild(listPrice);
        
        tbody.appendChild(tr);
    }
};


// Função de adicionar um novo item
const hndBtnAddItem = () =>{
    // criando um objeto para adicionar suas propiedades
    const item = {
        name: itemImput.value,
        amont: amountInput.value,
        price: priceInput.value
    };

    if(!item.name || !item.amont || !item.price){
        alert("Algum campo deve estar vazio!");
        return
    }
    products.push(item);
    console.log(products);
    itemImput.value = "";
    amountInput.value = "";
    priceInput.value = "";

    createListItem(products);
    itemImput.focus();
};


// Função de remover os itens da lista um por vez
const hndBtnClearList = () =>{
    itemImput.value = "";
    amountInput.value = "";
    priceInput.value = "";
    products = [];
    const rows = tbody.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        tbody.removeChild(rows[i]);
    }
    itemImput.focus();
};


// Adicionando as funções aos seus determinados botões
addItem.onclick = hndBtnAddItem;
clearList.onclick = hndBtnClearList;