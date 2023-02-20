import type { ActionFunctionArgs } from "react-router-dom";
import withErrorNotification from "./withErrorNotification";

export default function withFormData<TInput, TResponse = Response>(
    fn: (input: TInput, actionArgs?: ActionFunctionArgs) => Promise<TResponse>
) {
    return withErrorNotification(async (actionArgs: ActionFunctionArgs) => {
        const { request } = actionArgs;
        const formData = await request.formData();

        return await fn(
            Object.fromEntries(formData.entries()) as TInput,
            actionArgs
        );
    });
};
