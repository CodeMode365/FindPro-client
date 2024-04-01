export const useGetUserInfo = () => {
  if (!localStorage.getItem("auth-token")) return;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("auth-token")}`, // Example of adding an authorization token
  };
  try {
    const res: any = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/`,
      { headers }
    );
    return res
    updateUserData(res.data.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    }
    localStorage.clear();
    clearUserData();
  }
  console.log(userData);
};
