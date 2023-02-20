import type { ActionFunctionArgs } from "react-router-dom";

export default function withFormData<TInput, TResponse = any>(
    fn: (input: TInput, actionArgs?: ActionFunctionArgs) => Promise<TResponse>
) {
    return async (actionArgs: ActionFunctionArgs) => {
        const { request } = actionArgs;
        const formData = await request.formData();

        return fn(
            Object.fromEntries(formData.entries()) as TInput,
            actionArgs
        );
    };
};
