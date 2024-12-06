import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import PermissionList from './components/PermissionList';
import { users, roles, permissions } from './data/mock';

function App() {
  const handleEditUser = (user: any) => {
    console.log('Edit user:', user);
  };

  const handleDeleteUser = (user: any) => {
    console.log('Delete user:', user);
  };

  const handleEditRole = (role: any) => {
    console.log('Edit role:', role);
  };

  const handleDeleteRole = (role: any) => {
    console.log('Delete role:', role);
  };

  const handleEditPermission = (permission: any) => {
    console.log('Edit permission:', permission);
  };

  const handleDeletePermission = (permission: any) => {
    console.log('Delete permission:', permission);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                      Manage user accounts and their roles
                    </p>
                  </div>
                  <UserList
                    users={users}
                    onEdit={handleEditUser}
                    onDelete={handleDeleteUser}
                  />
                </>
              }
            />
            <Route
              path="/roles"
              element={
                <>
                  <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Roles</h1>
                    <p className="mt-2 text-sm text-gray-700">
                      Define and manage roles and their permissions
                    </p>
                  </div>
                  <RoleList
                    roles={roles}
                    onEdit={handleEditRole}
                    onDelete={handleDeleteRole}
                  />
                </>
              }
            />
            <Route
              path="/permissions"
              element={
                <>
                  <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Permissions
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                      Configure system permissions
                    </p>
                  </div>
                  <PermissionList
                    permissions={permissions}
                    onEdit={handleEditPermission}
                    onDelete={handleDeletePermission}
                  />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;