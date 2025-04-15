import{Pet} from "./Pet.js";

export class Dog extends Pet {
    

    voice() {
        return `${this.name}: au au 🐕🐕!`;
    }
}
