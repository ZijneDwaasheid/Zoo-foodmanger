import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RemoveAnimalComponent extends Component {
  @service store;

  @action
  async deleteAnimal(caretaker, animal) {
    let caretakerAnimals = [ ... await caretaker.animals];
    let animalToDelete = await animal;

    caretaker.animals = caretakerAnimals.filter((animal)=>{
      return animal.id !== animalToDelete.id;
    });

    await caretaker.save();
  }
}
