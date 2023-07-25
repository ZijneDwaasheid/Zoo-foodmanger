import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class AnimalAdapter extends JSONAPIAdapter {
    host = 'http://localhost';
}

