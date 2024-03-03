import jwt, { JwtPayload } from "jsonwebtoken";
import vars from "@/lib/server/config/vars.config";

const {
  jwt_secret: secretKey,
  login_expiry: expiresIn,
  verify_expiry: expiration,
} = vars.jwt;

const generateToken = (userId: string): string => {
  const payload = { userId };
  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
};

const verifyToken = (token: string): JwtPayload | null => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded as JwtPayload;
  } catch (error) {
    return null;
  }
};

export { generateToken, verifyToken };
