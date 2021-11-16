import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISServices_Management_AppCustomerLForm from './forms/i-i-s-services-management-app-customer-l';
import IISServices_Management_AppCustomerRequestLForm from './forms/i-i-s-services-management-app-customer-request-l';
import IISServices_Management_AppEventLForm from './forms/i-i-s-services-management-app-event-l';
import IISServices_Management_AppFeedbackLForm from './forms/i-i-s-services-management-app-feedback-l';
import IISServices_Management_AppServiceProviderLForm from './forms/i-i-s-services-management-app-service-provider-l';
import IISServices_Management_AppTicketLForm from './forms/i-i-s-services-management-app-ticket-l';
import IISServices_Management_AppCustomerEForm from './forms/i-i-s-services-management-app-customer-e';
import IISServices_Management_AppCustomerRequestEForm from './forms/i-i-s-services-management-app-customer-request-e';
import IISServices_Management_AppEventEForm from './forms/i-i-s-services-management-app-event-e';
import IISServices_Management_AppFeedbackEForm from './forms/i-i-s-services-management-app-feedback-e';
import IISServices_Management_AppServiceProviderEForm from './forms/i-i-s-services-management-app-service-provider-e';
import IISServices_Management_AppTicketEForm from './forms/i-i-s-services-management-app-ticket-e';
import IISServices_Management_AppCustomerRequestModel from './models/i-i-s-services-management-app-customer-request';
import IISServices_Management_AppCustomerModel from './models/i-i-s-services-management-app-customer';
import IISServices_Management_AppEventModel from './models/i-i-s-services-management-app-event';
import IISServices_Management_AppFeedbackModel from './models/i-i-s-services-management-app-feedback';
import IISServices_Management_AppServiceProviderModel from './models/i-i-s-services-management-app-service-provider';
import IISServices_Management_AppTicketPositionModel from './models/i-i-s-services-management-app-ticket-position';
import IISServices_Management_AppTicketModel from './models/i-i-s-services-management-app-ticket';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-services-management-app-customer-request': IISServices_Management_AppCustomerRequestModel,
    'i-i-s-services-management-app-customer': IISServices_Management_AppCustomerModel,
    'i-i-s-services-management-app-event': IISServices_Management_AppEventModel,
    'i-i-s-services-management-app-feedback': IISServices_Management_AppFeedbackModel,
    'i-i-s-services-management-app-service-provider': IISServices_Management_AppServiceProviderModel,
    'i-i-s-services-management-app-ticket-position': IISServices_Management_AppTicketPositionModel,
    'i-i-s-services-management-app-ticket': IISServices_Management_AppTicketModel
  },

  'application-name': 'Services_ management_ app',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Services_ management_ app',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Services_ management_ app',
          title: 'Services_ management_ app'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'events-and-requests': {
          caption: 'Events and Requests',
          title: 'Events and Requests',
          'i-i-s-services-management-app-event-l': {
            caption: 'Event',
            title: ''
          },
          'i-i-s-services-management-app-customer-request-l': {
            caption: 'Customer request',
            title: ''
          },
          'i-i-s-services-management-app-ticket-l': {
            caption: 'Ticket',
            title: ''
          },
          'i-i-s-services-management-app-feedback-l': {
            caption: 'Feedback',
            title: ''
          }
        },
        profile: {
          caption: 'Profile',
          title: 'Profile',
          'i-i-s-services-management-app-customer-l': {
            caption: 'Customer Profile',
            title: 'Customer'
          }
        },
        common: {
          caption: 'Common',
          title: 'Common',
          'i-i-s-services-management-app-service-provider-l': {
            caption: 'Service Provider',
            title: 'Service provider'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-services-management-app-customer-l': IISServices_Management_AppCustomerLForm,
    'i-i-s-services-management-app-customer-request-l': IISServices_Management_AppCustomerRequestLForm,
    'i-i-s-services-management-app-event-l': IISServices_Management_AppEventLForm,
    'i-i-s-services-management-app-feedback-l': IISServices_Management_AppFeedbackLForm,
    'i-i-s-services-management-app-service-provider-l': IISServices_Management_AppServiceProviderLForm,
    'i-i-s-services-management-app-ticket-l': IISServices_Management_AppTicketLForm,
    'i-i-s-services-management-app-customer-e': IISServices_Management_AppCustomerEForm,
    'i-i-s-services-management-app-customer-request-e': IISServices_Management_AppCustomerRequestEForm,
    'i-i-s-services-management-app-event-e': IISServices_Management_AppEventEForm,
    'i-i-s-services-management-app-feedback-e': IISServices_Management_AppFeedbackEForm,
    'i-i-s-services-management-app-service-provider-e': IISServices_Management_AppServiceProviderEForm,
    'i-i-s-services-management-app-ticket-e': IISServices_Management_AppTicketEForm
  },

});

export default translations;
