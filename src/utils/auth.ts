import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET = process.env.JWT_SECRET || "my-secret-key";

export const HashPass = (password: string) => bcrypt.hash(password, 10);

export const CompareHash = (password: string, hashed: string) =>
  bcrypt.compare(password, hashed);

export const TokenResult = (userId: number) =>
  jwt.sign({ userId }, SECRET, { expiresIn: "1h" });