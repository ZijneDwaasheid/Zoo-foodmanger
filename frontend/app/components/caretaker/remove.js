import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RemoveComponent extends Component {
  @service store;
  @service router;

  @action
  async removeCaretaker(caretaker) {
    if (window.confirm('Are you sure you want to fire ' + caretaker.name)) {
      try {
        await caretaker.destroyRecord();
      } catch (error) {
        console.error('Error removing caretaker:', error);
      }
      this.router.transitionTo('/caretakers');
    }
  }
}
