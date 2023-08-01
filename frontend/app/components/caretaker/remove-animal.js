import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';



export default class RemoveAnimalComponent extends Component {
    @service store;
  
    @action
    async deleteAnimal(caretaker, animal) {

        let caretakerWithAnimalToDelete = await this.store.peekRecord('caretaker', caretaker.id); //doing this because that's how they do it in the ember data example
        let animalToDelete = await this.store.peekRecord('animal', animal.id);

        let caretakerAnimals = await caretakerWithAnimalToDelete.animals;

        //some logs to understand the problem, at the moment I dont understand :(
        console.log('name caretaker: ',caretaker.name);
        console.log('species of the animal to delete: ',animalToDelete.species);
        console.log('what is in animalToDelete: ',animalToDelete);
        console.log('what is caretaker animals: ',caretakerAnimals);
        console.log('type of animalToDelete: ', typeof(animalToDelete));
        console.log('type of caretakerAnimals ',typeof(caretakerAnimals))

        caretakerAnimals.removeObject(animalToDelete); //here is a type error :(
        await caretaker.save();
    }
} 