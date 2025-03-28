import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Dashboard - SiliconAgent.ai" },
    { name: "description", content: "Admin dashboard for SiliconAgent.ai" },
  ];
};

export default function Admin() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Blog Management</h2>
            <ul>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Create New Post
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Edit Existing Posts
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Manage Categories
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-2">User Management</h2>
            <ul>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  View All Users
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Edit User Roles
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Delete Users
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold mb-2">Analytics Overview</h2>
            <p>Traffic: 10,000 visits</p>
            <p>New Users: 500</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
