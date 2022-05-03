// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EffortLogs, Filters, Jobs, JobsFilters } = initSchema(schema);

export {
  EffortLogs,
  Filters,
  Jobs,
  JobsFilters
};