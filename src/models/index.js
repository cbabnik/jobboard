// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Filters, Jobs, JobsFilters } = initSchema(schema);

export {
  Filters,
  Jobs,
  JobsFilters
};