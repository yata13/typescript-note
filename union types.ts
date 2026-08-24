// ============================================================
// TypeScript Utility Types
// ============================================================


// 1. Partial
// Makes all properties optional.

interface User {
  name: string;
  age: number;
}

const user: Partial<User> = {
  name: "Yared"
};


// ============================================================


// 2. Required
// Makes all properties required.

interface Car {
  brand: string;
  model: string;
  year?: number;
}

const car: Required<Car> = {
  brand: "BYD",
  model: "Song Plus",
  year: 2026
};


// ============================================================


// 3. Record
// Creates an object type with a specific key type and value type.

const scores: Record<string, number> = {
  Yared: 22,
  Yata: 21
};


// ============================================================


// 4. Omit
// Removes specified properties from a type.

interface Person {
  id: number;
  name: string;
  email: string;
  password: string;
}

const publicUser: Omit<Person, "password"> = {
  id: 1,
  name: "Yata",
  email: "dadi"
};


// ============================================================


// 5. Pick
// Keeps only the specified properties.

const userInfo: Pick<Person, "name" | "email"> = {
  name: "Yata",
  email: "dadi"
};


// ============================================================


// 6. Exclude
// Removes a type from a union.

type Role = "admin" | "user" | "guest";

type NewRole = Exclude<Role, "guest">;

const role: NewRole = "admin";

// const role2: NewRole = "guest"; // ❌ Error


// ============================================================


// 7. ReturnType
// Gets the return type of a function.

function getProduct() {
  return {
    id: 1,
    name: "Laptop",
    price: 1000
  };
}

type Product = ReturnType<typeof getProduct>;

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 1000
};


// ============================================================


// 8. Parameters
// Gets the parameter types of a function as a tuple.

function login(username: string, password: string) {}

type LoginParams = Parameters<typeof login>;

const loginData: LoginParams = [
  "Yared",
  "123456"
];


// ============================================================


// 9. Readonly
// Prevents properties from being modified.

interface Account {
  username: string;
  balance: number;
}

const account: Readonly<Account> = {
  username: "Yared",
  balance: 1000000000
};

// account.balance = 10; // ❌ Error


// ============================================================


// 10. Combining Utility Types
// Remove password AND make everything else optional.

interface UserAccount {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

type UpdateUser = Partial<Omit<UserAccount, "password">>;

const update: UpdateUser = {
  name: "Yata"
};

const update2: UpdateUser = {
  age: 21,
  email: "new@email.com"
};

// const update3: UpdateUser = {
//   password: "123456"
// }; // ❌ Error