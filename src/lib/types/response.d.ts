export type successResponseType<T> = {
  success: true;
  data: T;
};
export type errorResponseType = {
  success: false;
  message: string;
};

export type actionResponseType = successResponseType<T> | errorResponseType;
