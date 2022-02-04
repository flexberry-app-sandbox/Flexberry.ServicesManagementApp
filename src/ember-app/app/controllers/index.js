import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.events-and-requests.caption'),
          title: i18n.t('forms.application.sitemap.events-and-requests.title'),
          children: [{
            link: 'i-i-s-services-management-app-event-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-services-management-app-event-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-services-management-app-event-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-services-management-app-customer-request-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-services-management-app-customer-request-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-services-management-app-customer-request-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-services-management-app-ticket-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-services-management-app-ticket-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-services-management-app-ticket-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-services-management-app-feedback-l',
            caption: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-services-management-app-feedback-l.caption'),
            title: i18n.t('forms.application.sitemap.events-and-requests.i-i-s-services-management-app-feedback-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.profile.caption'),
          title: i18n.t('forms.application.sitemap.profile.title'),
          children: [{
            link: 'i-i-s-services-management-app-customer-l',
            caption: i18n.t('forms.application.sitemap.profile.i-i-s-services-management-app-customer-l.caption'),
            title: i18n.t('forms.application.sitemap.profile.i-i-s-services-management-app-customer-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.common.caption'),
          title: i18n.t('forms.application.sitemap.common.title'),
          children: [{
            link: 'i-i-s-services-management-app-service-provider-l',
            caption: i18n.t('forms.application.sitemap.common.i-i-s-services-management-app-service-provider-l.caption'),
            title: i18n.t('forms.application.sitemap.common.i-i-s-services-management-app-service-provider-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})