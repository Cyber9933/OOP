
//produktas vienas is daliu
/* NORIMA PASIEKTI:

paskaiciuoti:
METODAI
    1)intro()-apibudina masinos modeli ir spalva
    2)drive() - nurodzius norima nuvaziuoti atstuma yra paskaiciuojamos degalu sanaudos,
    jei nepakaknka degalu , tai ribiniu atvetu tiesiog sustoja ir masina issijungia.
    3)engineOn()-ijungia varikli, jei yra kuro ir jei yra isjungtas
    4)engineOff()- isungia varikli, jei yra ijungtas
    5)refill()-uzpilti degalu, bet ne daugiau nei telpa ir jei variklis yra isjungtas
    */
export class Car {
    constructor(model,color, tankMax){
        this.model=model;
        this.color=color;
        this.tankMax=tankMax;
        this.tank=0;
        this.engineIsOn=false;
    }
    intro(){
        return`This is ${this.color} ${this.model}.`
    }
    refill(volume){
        if(this.engineIsOn){
        return 'Error: to refil a tank. you must turn off engine first.';
    }
        if(typeof volume!== "number"|| !isFinite(volume)){
            return'Error: Only numbers allowed.';
        }
        if (volume<0){
        return`Refill with ${volume} litres is not allowed`
    }
   
        if(this.tank>=volume){
        this.tank+=volume;
    }
        else {
            this.tank=this.tankMax;
        }
    }
}