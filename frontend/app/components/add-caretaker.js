import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AddCaretakerComponent extends Component {
  name = '';

  @service store;

  @action
  async addCaretaker(event) {
    event.preventDefault();

    const newCaretaker = this.store.createRecord('caretaker', {
      name: this.name,
    });

    try {
      await newCaretaker.save();

      this.name = '';
    } catch (error) {
      console.error('Error saving new animal:', error);
    }
  }
}
