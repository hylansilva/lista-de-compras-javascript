// criando o array onde vou adicionar os itens
let products = [];

// importando os elementos do html
const itemImput = document.getElementById("itemInput");
const addItem = document.getElementById("addItem");
const clearList = document.getElementById("clearList");
const list = document.getElementById("list");

// Função que cria um item da lista

const createListItem = (list, products) =>{
    list.innerHTML = "";
    for(let i = 0; i < products.length; i++){
        const item = document.createTextNode(products[i]);
        const listItem = document.createElement("li");
        listItem.appendChild(item);
        list.appendChild(listItem);
    }
};

// Função de adicionar

const hndBtnAddItem = () =>{
    const item = itemImput.value;
    if(!item){
        alert("Por favor digite um item!");
        return
    }
    products.push(item);
    itemImput.value = "";
    createListItem(list, products);
};

// Função de Apagar todos os itens da lista

const hndBtnClearList = () =>{
    itemImput.value = "";
    products = [];
    list.innerHTML ="";
    itemImput.focus();
}

// Adicionando as funções aos seus determinados botões

addItem.onclick = hndBtnAddItem;
clearList.onclick = hndBtnClearList;