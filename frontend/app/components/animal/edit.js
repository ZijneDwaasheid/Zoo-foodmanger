import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EditComponent extends Component {
  clicked = false;
  diet = '';

  @service store;

  @action
  async clickedOnEdit() {
    this.clicked = true;
  }

  @action
  async editAnimal(animal) {}
}
