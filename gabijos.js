//parduotuve

const inventory = {
    Fruits:{
        Apples:{quantity: 10, threshold: 5},
        Bananas:{quantity: 3, threshold: 5},

    },
    Electronics:{
        Phones:{quantity: 2, threshold: 2},
        Laptops:{quantity: 0, threshold: 1},
    }
}
// 

function addItem(category, name, quantity, threshold=5){
    if(!inventory[category]){
        inventory[category] = {}
    }
    if(!inventory[category][name]){
        inventory[category][name].quantity+=threshold
    }else{
        inventory[category][name] = {quantity, threshold}
    }
    logTransaction('add', category, name, quantity)

}
function removeItem(category, name, quantity){
    let item;
    if(inventory[category]){
        item = inventory[category][name];
    }
    if(item){
        item.quantity -= quantity;
        if(item.quantity <= 0){
            console.log('ispirkta preke')
            delete inventory[category][name];
        }
        logTransaction('remove', category, name, quantity)
    }
}

function checkLowStock(){
    for(let category in inventory){
        for(let item in inventory[category]){
            const{quantity, threshold} = inventory[category][item];
            if(inventory <= threshold){
                console.warn(`Prekė ${item} kategorijoje ${category} yra mažai sandėlyje: ${quantity} liko.`);
            }
        }
    }
}


//prekes paieska

function searchItem(name){
    for(let category in inventory){
        for(let item in inventory[category]){
            if(item.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
                console.log(`Prekė ${item} kategorijoje ${category} yra sandėlyje: ${inventory[category][item].quantity} vnt.`);
            }
        }
    }
    return null;
}



console.log(inventory)
addItem('Fruits', 'Apples',  5)
let n;
addItem('Fruits', 'Bananas', 14)
console.log(inventory)


function logTransaction(type, category, item, quantity) {
    log.push({type, category, item, quantity, timestamp: new Date().toLocaleString()});
    
}

function showLogs(){
    console.table(logs);
}
showLogs();
checkLowStock();