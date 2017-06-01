import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  city: DS.attr(),
  content: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
