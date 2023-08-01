import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RemoveComponent extends Component {
  @service store;

  @action
  async removeAnimal(animal) {
    try {
      await animal.destroyRecord();
    } catch (error) {
      console.error('Error removing animal:', error);
    }
  }
}
