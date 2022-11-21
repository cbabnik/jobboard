import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type EffortLogsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FiltersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JobsFiltersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerEffortLogs = {
  readonly id: string;
  readonly minutes?: number | null;
  readonly jobsID: string;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEffortLogs = {
  readonly id: string;
  readonly minutes?: number | null;
  readonly jobsID: string;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EffortLogs = LazyLoading extends LazyLoadingDisabled ? EagerEffortLogs : LazyEffortLogs

export declare const EffortLogs: (new (init: ModelInit<EffortLogs, EffortLogsMetaData>) => EffortLogs) & {
  copyOf(source: EffortLogs, mutator: (draft: MutableModel<EffortLogs, EffortLogsMetaData>) => MutableModel<EffortLogs, EffortLogsMetaData> | void): EffortLogs;
}

type EagerFilters = {
  readonly id: string;
  readonly name?: string | null;
  readonly Jobs?: (JobsFilters | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFilters = {
  readonly id: string;
  readonly name?: string | null;
  readonly Jobs: AsyncCollection<JobsFilters>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Filters = LazyLoading extends LazyLoadingDisabled ? EagerFilters : LazyFilters

export declare const Filters: (new (init: ModelInit<Filters, FiltersMetaData>) => Filters) & {
  copyOf(source: Filters, mutator: (draft: MutableModel<Filters, FiltersMetaData>) => MutableModel<Filters, FiltersMetaData> | void): Filters;
}

type EagerJobs = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly notes?: string | null;
  readonly minutesTaken?: number | null;
  readonly Filters?: (JobsFilters | null)[] | null;
  readonly column?: number | null;
  readonly EffortLogs?: (EffortLogs | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobs = {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly notes?: string | null;
  readonly minutesTaken?: number | null;
  readonly Filters: AsyncCollection<JobsFilters>;
  readonly column?: number | null;
  readonly EffortLogs: AsyncCollection<EffortLogs>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Jobs = LazyLoading extends LazyLoadingDisabled ? EagerJobs : LazyJobs

export declare const Jobs: (new (init: ModelInit<Jobs, JobsMetaData>) => Jobs) & {
  copyOf(source: Jobs, mutator: (draft: MutableModel<Jobs, JobsMetaData>) => MutableModel<Jobs, JobsMetaData> | void): Jobs;
}

type EagerJobsFilters = {
  readonly id: string;
  readonly filters: Filters;
  readonly jobs: Jobs;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobsFilters = {
  readonly id: string;
  readonly filters: AsyncItem<Filters>;
  readonly jobs: AsyncItem<Jobs>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobsFilters = LazyLoading extends LazyLoadingDisabled ? EagerJobsFilters : LazyJobsFilters

export declare const JobsFilters: (new (init: ModelInit<JobsFilters, JobsFiltersMetaData>) => JobsFilters) & {
  copyOf(source: JobsFilters, mutator: (draft: MutableModel<JobsFilters, JobsFiltersMetaData>) => MutableModel<JobsFilters, JobsFiltersMetaData> | void): JobsFilters;
}