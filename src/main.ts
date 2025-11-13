interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface CreateUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

interface UpdateUser {
  name?: string;
  email?: string;
  isAdmin?: boolean;
}
