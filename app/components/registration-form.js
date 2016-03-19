import Ember from 'ember';
import {
  validator, buildValidations
}
from 'ember-cp-validations';

const {
  Component,
  computed: { readOnly }
} = Ember;

const Validations = buildValidations({
  'user.firstName': validator('presence', true),
  'user.lastName': validator('presence', true),
  // firstName: validator('presence', true),
  // lastName: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

export default Component.extend(Validations, {
  email: readOnly('user.email') //,
  // firstName: readOnly('user.firstName'),
  // lastName: readOnly('user.lastName')
});
