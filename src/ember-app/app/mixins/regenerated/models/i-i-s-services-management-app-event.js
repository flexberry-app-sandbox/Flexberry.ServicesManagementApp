import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  eventDate: DS.attr('date'),
  eventType: DS.attr('i-i-s-services-management-app-t-event-type'),
  description: DS.attr('string'),
  startTime: DS.attr('string'),
  duration: DS.attr('string'),
  serviceProvider: DS.belongsTo('i-i-s-services-management-app-service-provider', { inverse: null, async: false })
});

export let ValidationRules = {
  eventDate: {
    descriptionKey: 'models.i-i-s-services-management-app-event.validations.eventDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  eventType: {
    descriptionKey: 'models.i-i-s-services-management-app-event.validations.eventType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-services-management-app-event.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  startTime: {
    descriptionKey: 'models.i-i-s-services-management-app-event.validations.startTime.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  duration: {
    descriptionKey: 'models.i-i-s-services-management-app-event.validations.duration.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  serviceProvider: {
    descriptionKey: 'models.i-i-s-services-management-app-event.validations.serviceProvider.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EventE', 'i-i-s-services-management-app-event', {
    eventDate: attr('Event date', { index: 0 }),
    eventType: attr('Event type', { index: 1 }),
    startTime: attr('Start time', { index: 2 }),
    duration: attr('Duration', { index: 3 }),
    description: attr('Description', { index: 4 }),
    serviceProvider: belongsTo('i-i-s-services-management-app-service-provider', 'Service provider', {
      name: attr('Name', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('EventL', 'i-i-s-services-management-app-event', {
    eventDate: attr('Event date', { index: 0 }),
    eventType: attr('Event type', { index: 1 }),
    startTime: attr('Start time', { index: 2 }),
    duration: attr('Duration', { index: 3 }),
    description: attr('Description', { index: 4 }),
    serviceProvider: belongsTo('i-i-s-services-management-app-service-provider', 'Name', {
      name: attr('Name', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
