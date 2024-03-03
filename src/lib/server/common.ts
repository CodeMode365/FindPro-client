import { actionResponseType } from "@/lib/types/response";

export const generateErrorRes = (
  message: string = `Something went wrong! \n Please try again later!`
): actionResponseType => ({
  success: false,
  message,
  data: undefined,
});

export const generateSuccessRes = (data: any): actionResponseType => ({
  success: true,
  data,
});

export const asyncHandler = (
  fn: (...args: any[]) => Promise<actionResponseType>
) => {
  return async (...args: any[]) => {
    try {
      return await fn(...args);
    } catch (error) {
      return generateErrorRes(String(error));
    }
  };
};
