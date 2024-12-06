import { Permission, Role, User } from '../types';

export const permissions: Permission[] = [
  { id: '1', name: 'read:users', description: 'View users' },
  { id: '2', name: 'write:users', description: 'Create/Edit users' },
  { id: '3', name: 'delete:users', description: 'Delete users' },
  { id: '4', name: 'read:roles', description: 'View roles' },
  { id: '5', name: 'write:roles', description: 'Create/Edit roles' },
  { id: '6', name: 'delete:roles', description: 'Delete roles' },
];

export const roles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: permissions,
  },
  {
    id: '2',
    name: 'Editor',
    description: 'Can manage content',
    permissions: permissions.slice(0, 4),
  },
  {
    id: '3',
    name: 'Viewer',
    description: 'Read-only access',
    permissions: [permissions[0], permissions[3]],
  },
];

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    role: roles[0],
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    role: roles[1],
    status: 'active',
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    role: roles[2],
    status: 'inactive',
  },
];