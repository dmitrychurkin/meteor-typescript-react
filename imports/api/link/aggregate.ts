import { AggregateRoot, Model } from "/imports/core/shared";

export interface LinkAggregate extends Model, AggregateRoot {
    readonly title: string;
    readonly url: string;
}
