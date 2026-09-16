import { AppDataSource } from "../config/database";
import { User } from "../entity/User";
import { TokenResult, HashPass, CompareHash } from "../utils/auth";

const userRepository = AppDataSource.getRepository(User);

// fields that are safe to send back (no password)
const safeFields = { id: true, name: true, email: true };

export const getAllUser = () => userRepository.find({ select: safeFields });

export const getUserByid = (id: number) =>
  userRepository.findOne({ where: { id }, select: safeFields });

export const newUser = async (name: string, email: string, password: string) => {
  // stop duplicate emails
  const exists = await userRepository.findOneBy({ email });
  if (exists) return null;

  const hashed = await HashPass(password);
  const user = userRepository.create({ name, email, password: hashed });
  const saved = await userRepository.save(user);

  // remove password before returning
  const { password: _, ...safeUser } = saved;
  return safeUser;
};

export const loginUser = async (email: string, password: string) => {
  const user = await userRepository.findOneBy({ email });
  if (!user) return null;

  const ok = await CompareHash(password, user.password);
  if (!ok) return null;

  return TokenResult(user.id);
};

export const updateUser = async (id: number, data: Partial<User>) => {
  if (data.password) data.password = await HashPass(data.password);
  const result = await userRepository.update(id, data);
  return result.affected !== 0;
};

export const deleteUserById = async (id: number) => {
  const result = await userRepository.delete(id);
  return result.affected !== 0;
};