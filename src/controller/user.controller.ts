import { Request, Response } from "express";
import {
  getAllUser,
  getUserByid,
  newUser,
  loginUser,
  updateUser,
  deleteUserById,
} from "../services/user.service";

// GET /users
export const allUser = async (req: Request, res: Response) => {
  try {
    const users = await getAllUser();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

// GET /users/:id
export const getUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "invalid id" });
      return;
    }

    const user = await getUserByid(id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

// POST /users/signup
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      res.status(400).json({ message: "name, email and password are required" });
      return;
    }

    const user = await newUser(name, email, password);
    if (!user) {
      res.status(409).json({ message: "email already used" });
      return;
    }

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

// POST /users/login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      res.status(400).json({ message: "email and password are required" });
      return;
    }

    const token = await loginUser(email, password);
    if (!token) {
      res.status(401).json({ message: "wrong email or password" });
      return;
    }

    res.json({ message: "welcome back", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

// PUT /users/:id
export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "invalid id" });
      return;
    }

    const { name, email, password } = req.body || {};

    // only send the fields the user actually gave
    const data: { name?: string; email?: string; password?: string } = {};
    if (name) data.name = name;
    if (email) data.email = email;
    if (password) data.password = password;

    if (Object.keys(data).length === 0) {
      res.status(400).json({ message: "nothing to update" });
      return;
    }

    const updated = await updateUser(id, data);
    if (!updated) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    res.json({ message: "user info is edited" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "invalid id" });
      return;
    }

    const deleted = await deleteUserById(id);
    if (!deleted) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    res.json({ message: "user deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};