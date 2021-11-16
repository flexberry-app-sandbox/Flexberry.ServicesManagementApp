import { Serializer as TicketSerializer } from
  '../mixins/regenerated/serializers/i-i-s-services-management-app-ticket';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TicketSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
