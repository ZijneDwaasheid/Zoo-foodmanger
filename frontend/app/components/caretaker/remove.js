import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RemoveComponent extends Component {
  @service store;
  @service router;

  @action
  async removeCaretaker(caretaker) {
    try {
      await caretaker.destroyRecord();
    } catch (error) {
      console.error('Error removing caretaker:', error);
    }
    this.router.transitionTo('/caretakers');
  }
}