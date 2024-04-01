export const useGetAuthToken = () => {
  const token = localStorage.getItem("auth-token");
  return token ?? null;
};
