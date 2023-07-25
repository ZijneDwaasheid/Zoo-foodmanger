import Model, { attr, hasMany } from '@ember-data/model';

export default class AnimalModel extends Model {
  @attr('string') species;
  @attr('string') diet;

  @hasMany('caretaker', { async: false, inverse: 'animals' }) caretakers;
}

