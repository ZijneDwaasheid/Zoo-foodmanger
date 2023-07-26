import EmberRouter from '@ember/routing/router';
import config from 'frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('caretakers');
  this.route('animals');
  this.route('caretaker-animals', { path: '/caretaker-animals/:caretaker_id' });
});
