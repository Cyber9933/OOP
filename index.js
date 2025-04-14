// class(klase)-> object(objektas)

// blyno receptura - >iskepamas valgomas blynas
// namo brezinys -> pastatytas namas
// informacijos rinkinys, kuris is saves nieko neveikia, 
// taciau kai ja vadovaujantis objekta, ji pradeda veikti

// klases pagrindinis skirtumas nera () siu skliaustu

// jokiu budu negalima rasyti FUNCTION, nors veikia funkcijos metodu



console.log('oop')
console.log('********');
console.log('********');

//nera()

// lietuviski pavadinimai atskiria kintamas ir privalomas vietas
class Dog{
    constructor(vardas, kailioSpalva){ //kaip return - constructor, be jo klase neveikia
        this.name=vardas;
        this.furColor=kailioSpalva;
        this.age=0;
        this.legsCount=4;
        this.hasTail=true;
        this.isStanding=true; //boolean darome pvz
    }
//nera f-ja, taciau intermpretuojama kaip funkcija
    hi(){
        return`Hi, my name is ${this.name}!`;
    }
    Intro(){
        return `Hi, my name is ${this.name}, my fur is ${this.furColor} and I am ${this.age} years old.`
    }
    //kas metus pridedi
    birthday(){
        this.age++;  //prideda kiekvienus metus su console()
        return `Happy birthday ${this.name}! NOw you are ${this.age} years old` ;
        //return `Happy birthday ${++this.name}! NOw you are ${this.age} years old` ;
    }
    lostTail(){
        this.tail=false;
    }
    lostLeg(){
        if(this.legsCount>0){ //apsauga nuo neigiamos neteisingos reiksmes

        
        this.legsCount--;}
    }
    changePose(){
        this.isStanding=!this.isStanding;
        // this.isStanding=this.isStanding?false:true;  <- teisingas pvz

        /*if(this.isStanding){                          <- teisingas pvz
            this.isStanding=false; 
        }else{
            this.isStanding=true;
        }*/
    }
    changeFurColor(newColor){
        this.furColor=newColor;
        return `${this.name} has ${this.furColor} fur.`;
    }
}
const rex=new Dog('Rex', 'black');
const brisius= new Dog('Brisius', 'white');


console.log(rex);
console.log(brisius.furColor);
console.log(rex.age);
console.log(rex.hi());
console.log(brisius.hi());

console.log(brisius.Intro());
//amziaus pridejimas
console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());

console.log(rex.birthday());
console.log(rex.birthday());
//uodegos neturejimas
brisius.lostTail();
console.log(brisius);

///prarado koja
brisius.lostLeg()
console.log(brisius);

//stovi sedi

brisius.changePose();
console.log(brisius);
 //kita spalva

 console.log(brisius.changeFurColor('red'));
 console.log(brisius);
 

console.log(rex);






// informacia klaseje manipuliuoja kiti klases metodai
// informacijos ir funkcionalumo derinys
// BUTINAI "THIS"

console.log('******');



