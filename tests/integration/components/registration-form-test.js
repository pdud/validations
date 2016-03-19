import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('registration-form', 'Integration | Component | registration form', {
  integration: true
});

test('it validates nested', function(assert) {
  const user = Ember.Object.create();

  this.set('user', user);
  this.render(hbs`{{registration-form user=user}}`);

  assert.equal(this.$('.first-name .error').length, 1);

  this.$('.first-name input').val('Harry Kane').change();
  assert.equal(this.$('.first-name .error').length, 0);
});

test('it validates aliased', function(assert) {
  const user = Ember.Object.create();

  this.set('user', user);
  this.render(hbs`{{registration-form user=user}}`);

  assert.equal(this.$('.email .error').length, 1);

  this.$('.email input').val('harrykane@gmail.com').change();
  assert.equal(this.$('.email .error').length, 0);
});

test('it validates nested 2', function(assert) {
  const user = Ember.Object.create();

  this.set('user', user);
  this.render(hbs`{{registration-form user=user}}`);

  assert.equal(this.$('.last-name .error').length, 1);

  this.$('.last-name input').val('Harry Kane').change();
  assert.equal(this.$('.last-name .error').length, 0);
});
