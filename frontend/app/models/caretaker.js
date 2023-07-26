import Model, { attr, hasMany } from '@ember-data/model';

export default class CaretakerModel extends Model {
  @attr('string') name;

  @hasMany('animal', { async: true, inverse: 'caretakers' }) animals;
}
