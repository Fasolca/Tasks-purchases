"use strict"

//Создать массив «Список покупок». Каждый элемент массива должен быть объектом покупки, который содержит следующие свойства: − название продукта,
//− необходимое количество/объём,
//− единицы измерения кол-ва/объёма,
//− статус куплен/не куплен.

let shoppingList = [
    {
        productName: 'Яблоко',
        requiredQuantity: 5,
        measureUnit: 'шт',
        saleStatus: true,
        price: 20
    },
    {
        productName: 'Груша',
        requiredQuantity: 3,
        measureUnit: 'шт',
        saleStatus: false,
        price: 30 
    },
    {
        productName: 'Киви',
        requiredQuantity: 7,
        measureUnit: 'шт',
        saleStatus: false,
        price: 40  
    } 
];

console.log(shoppingList);

//1. Вывод списка покупок на экран в понятном для пользователя виде с поясняющими словами и обозначениями.



function showToUser() {
    let result = '';

    shoppingList.forEach(
        function( elem ) {
            result += `Наименование: ${elem.productName}\nКолличество: ${elem.requiredQuantity}${elem.measureUnit}\nСтатус: ${elem.saleStatus ? 'куплено' : 'не куплено'}\nЦена: ${elem.price} руб/шт\n\n`;
        }
    );
    console.log(result);
}

showToUser(shoppingList);



//2. Сортировка списка покупок: в начале – некупленные продукты, в конце – купленные продукты.



function sortList() {
    
    shoppingList.sort((elemOne, elemTwo) => elemOne.saleStatus - elemTwo.saleStatus);
    
}

sortList();
showToUser(shoppingList);


//3. Добавление покупки в список. При добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую

let addName = {
    productName: 'Мандарин',
    requiredQuantity: 7,
    measureUnit: 'шт',
    saleStatus: false,
    price: 35
}

function addProduct() {
    
    let product = shoppingList.find( product=> product.productName === addName.productName); 
    console.log(product);

    let getProductIndex =shoppingList.findIndex( product=> product.productName === addName.productName); 
    console.log(getProductIndex);

    if (product) {
        product.requiredQuantity = addName.requiredQuantity + product.requiredQuantity ;
        console.log(product.requiredQuantity);
    } 
    else {
        shoppingList.push(addName);
    }
    console.log(shoppingList);
    
};
addProduct();
showToUser(shoppingList);


//4. Покупка продукта

function buyGoods() {

    let getProductIndex =shoppingList.findIndex( product=> product.productName === addName.productName); 
    console.log(getProductIndex);
    if ( shoppingList[getProductIndex].saleStatus == true) {
        console.log('Продукт уже куплен!');
    } 
    else {
        shoppingList[getProductIndex].saleStatus = true;//меняю статус
        console.log('Покупаем продукт!');
    }
}

buyGoods(addName);
sortList(shoppingList);
showToUser(buyGoods);



// 5. Расчёт и вывод суммарной и средней стоимости всех покупок.


//5.0 новый массив с суммами по каждому товару

let checklist = shoppingList.map(x => x.requiredQuantity * x.price);

console.log(checklist);


//5.1 Расчёт и вывод суммарной стоимости

let checkSum = checklist.reduce(
    (sum, current) => sum + current, 0
); 

console.log(`Общая стоимость - ${checkSum} руб`);


//5.2 Расчёт и вывод средней стоимости

function averageSumCheck() {

    let averageSum = checkSum / shoppingList.length;
    console.log(`Средняя стоимость в чеке - ${averageSum.toFixed(1)} руб`);
}

averageSumCheck();

