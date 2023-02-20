import { Meteor } from "meteor/meteor";
import { toast } from "react-toastify";

export default function withErrorNotification<TResponse = Response>(
    fn: (...args: Array<any>) => Promise<TResponse>
) {
    return async (...args: Array<any>) => {
        try {
            return await fn(...args);
        }catch (error) {
            let message: string | undefined = 'Something went wrong';

            if (error instanceof Meteor.Error) {
                message = error.reason;
            }else if (error instanceof Error) {
                message = error.message;
            }

            toast.error(message);

            return error;
        }
    };
};
