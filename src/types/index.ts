export type Permission = {
  id: string;
  name: string;
  description: string;
};

export type Role = {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: Role;
  status: 'active' | 'inactive';
};