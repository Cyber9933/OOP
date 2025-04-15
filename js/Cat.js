import{Pet} from "./Pet.js";

export class Cat extends Pet{
    
    voice(){
        return`${this.name}: miau miau!`;
    }
}