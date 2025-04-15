
import{Pet} from "./Pet.js";

export class Hamster extends Pet {
    
    voice(){
        return`${this.name}: krimst krimst!`;
    }
}