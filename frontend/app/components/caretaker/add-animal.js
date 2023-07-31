import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AddAnimalComponent extends Component {
  @service store;
  @service router;

  @tracked animals;
  @tracked animalToAdd;

  constructor() {
    super(...arguments);
    this.fetchAnimals();
  }

  async fetchAnimals() {
    try {
      this.animals = await this.store.findAll('animal');
      console.log(this.animals);
    } catch (error) {
      console.log('Error fetching animals:', error);
    }
  }

  @action
  async onAnimalSelect(event) {
    this.selectedAnimalId = event.target.value;
    this.animalToAdd = await this.store.findRecord(
      'animal',
      this.selectedAnimalId
    );
  }

  @action
  async addAnimal(caretaker, event) {
    //console.log(caretaker.name);
    //console.log(this.animalToAdd.species);
    //console.log(caretaker.animals.name);
    let caretakerAnimals = await caretaker.animals;
    event.preventDefault();
    await caretaker.save();
    caretakerAnimals.push(this.animalToAdd);
    await caretaker.save();
  }
}
