import SimpleSchema from "simpl-schema";
import type { SchemaDefinitionWithShorthand, SimpleSchemaOptions } from "simpl-schema/dist/esm/types";

export default function withValidation<TInput extends {}, TResponse = any>(
    fn: (input: TInput) => Promise<TResponse>,
    schema?: SchemaDefinitionWithShorthand,
    options?: SimpleSchemaOptions
) {
    return (input: TInput) => {
        new SimpleSchema(schema, options)
            .validate(input);

        return fn(input);
    };
}
