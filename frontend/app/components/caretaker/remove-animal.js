import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RemoveAnimalComponent extends Component {
  @service store;

  @action
  async deleteAnimal(caretaker, animal) {
    let caretakerAnimals = await caretaker.animals;
    let animalToDelete = await animal;

    //some logs to understand the problem, at the moment I dont understand :(
    console.log('name caretaker: ', caretaker.name); //this gives the right name
    console.log('species of the animal to delete: ', animalToDelete.species); //this gives the right species
    console.log('what is in animalToDelete: ', animalToDelete); // this gives something I don't understand
    console.log('what is in caretaker animals: ', caretakerAnimals); // this also, but somewhere, you van see the animals that are linked with the caretaker
    console.log('type of animalToDelete: ', typeof animalToDelete);
    console.log('type of caretakerAnimals ', typeof caretakerAnimals);

    caretakerAnimals.removeObject(animalToDelete); //here is a typeError :(
    await caretaker.save();
  }
}
