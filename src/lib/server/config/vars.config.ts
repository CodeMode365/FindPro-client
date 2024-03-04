export default {
  jwt: {
    jwt_secret: process.env.JWT_SECRET as string,
    login_expiry: process.env.JWT_EXPIRY || "1d",
    verify_expiry: process.env.JWT_VERIFY_EXPIRY || "1d",
  },
};
