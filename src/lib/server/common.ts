import {
  actionResponseType,
  errorResponseType,
  successResponseType,
} from "@/lib/types/response";

export const generateErrorRes = (
  message: string = `Something went wrong! \n Please try again later!`
): errorResponseType => ({
  success: false,
  message,
});

export const generateSuccessRes = <T>(data: T): successResponseType<T> => ({
  success: true,
  data,
});

export const asyncHandler = (
  fn: (...args: any[]) => Promise<actionResponseType>
) => {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error: any) {
      console.log(error.message);
      return generateErrorRes(String(error.message));
    }
  };
};
