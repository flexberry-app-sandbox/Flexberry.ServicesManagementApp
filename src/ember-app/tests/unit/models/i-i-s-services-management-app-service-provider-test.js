import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-services-management-app-service-provider', 'Unit | Model | i-i-s-services-management-app-service-provider', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-services-management-app-customer-request',
    'model:i-i-s-services-management-app-customer',
    'model:i-i-s-services-management-app-event',
    'model:i-i-s-services-management-app-feedback',
    'model:i-i-s-services-management-app-service-provider',
    'model:i-i-s-services-management-app-ticket-position',
    'model:i-i-s-services-management-app-ticket',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
