import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-services-management-app-ticket-position', 'Unit | Serializer | i-i-s-services-management-app-ticket-position', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-services-management-app-ticket-position',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-services-management-app-t-event-type',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
