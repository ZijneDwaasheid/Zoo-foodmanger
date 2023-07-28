import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CaretakerAnimalsRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('caretaker', params.caretaker_id, {
      include: 'animals',
    });
  }
}
