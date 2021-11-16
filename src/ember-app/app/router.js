import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-services-management-app-customer-l');
  this.route('i-i-s-services-management-app-customer-e',
  { path: 'i-i-s-services-management-app-customer-e/:id' });
  this.route('i-i-s-services-management-app-customer-e.new',
  { path: 'i-i-s-services-management-app-customer-e/new' });
  this.route('i-i-s-services-management-app-customer-request-l');
  this.route('i-i-s-services-management-app-customer-request-e',
  { path: 'i-i-s-services-management-app-customer-request-e/:id' });
  this.route('i-i-s-services-management-app-customer-request-e.new',
  { path: 'i-i-s-services-management-app-customer-request-e/new' });
  this.route('i-i-s-services-management-app-event-l');
  this.route('i-i-s-services-management-app-event-e',
  { path: 'i-i-s-services-management-app-event-e/:id' });
  this.route('i-i-s-services-management-app-event-e.new',
  { path: 'i-i-s-services-management-app-event-e/new' });
  this.route('i-i-s-services-management-app-feedback-l');
  this.route('i-i-s-services-management-app-feedback-e',
  { path: 'i-i-s-services-management-app-feedback-e/:id' });
  this.route('i-i-s-services-management-app-feedback-e.new',
  { path: 'i-i-s-services-management-app-feedback-e/new' });
  this.route('i-i-s-services-management-app-service-provider-l');
  this.route('i-i-s-services-management-app-service-provider-e',
  { path: 'i-i-s-services-management-app-service-provider-e/:id' });
  this.route('i-i-s-services-management-app-service-provider-e.new',
  { path: 'i-i-s-services-management-app-service-provider-e/new' });
  this.route('i-i-s-services-management-app-ticket-l');
  this.route('i-i-s-services-management-app-ticket-e',
  { path: 'i-i-s-services-management-app-ticket-e/:id' });
  this.route('i-i-s-services-management-app-ticket-e.new',
  { path: 'i-i-s-services-management-app-ticket-e/new' });
});

export default Router;
