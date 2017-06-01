import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  // add dynamic segment to give each post a unique id
  this.route('post', {path: '/post/:post_id'});
});

export default Router;
