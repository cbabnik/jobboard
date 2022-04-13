import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FiltersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobsFiltersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Filters {
  readonly id: string;
  readonly name?: string | null;
  readonly Jobs?: (JobsFilters | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Filters, FiltersMetaData>);
  static copyOf(source: Filters, mutator: (draft: MutableModel<Filters, FiltersMetaData>) => MutableModel<Filters, FiltersMetaData> | void): Filters;
}

export declare class Jobs {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly minutesTaken?: number | null;
  readonly started?: boolean | null;
  readonly onhold?: boolean | null;
  readonly done?: boolean | null;
  readonly Filters?: (JobsFilters | null)[] | null;
  readonly creationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Jobs, JobsMetaData>);
  static copyOf(source: Jobs, mutator: (draft: MutableModel<Jobs, JobsMetaData>) => MutableModel<Jobs, JobsMetaData> | void): Jobs;
}

export declare class JobsFilters {
  readonly id: string;
  readonly filters: Filters;
  readonly jobs: Jobs;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<JobsFilters, JobsFiltersMetaData>);
  static copyOf(source: JobsFilters, mutator: (draft: MutableModel<JobsFilters, JobsFiltersMetaData>) => MutableModel<JobsFilters, JobsFiltersMetaData> | void): JobsFilters;
}