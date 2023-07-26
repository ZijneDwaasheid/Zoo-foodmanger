import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddAnimalComponent extends Component {
  species = '';
  diet = '';

  @service store;

  @action
  async addAnimal(event) {
    event.preventDefault();

    const newAnimal = this.store.createRecord('animal', {
      species: this.species,
      diet: this.diet,
    });

    try {
      await newAnimal.save();

      this.species = '';
      this.diet = '';
    } catch (error) {
      console.error('Error saving new animal:', error);
    }
  }
}
