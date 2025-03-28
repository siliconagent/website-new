import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Modernizing Legacy Java Applications - SiliconAgent.ai Blog",
    },
    {
      name: "description",
      content: "Best practices for upgrading your Java applications.",
    },
  ];
};

export default function LegacyJavaModernization() {
  return (
    <Layout>
      <div className="blog-post py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            Modernizing Legacy Java Applications
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Is your enterprise still running on outdated Java applications?
            Learn the best practices for upgrading and modernizing your legacy
            systems.
          </p>

          <section className="content">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              The Challenges of Legacy Java
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Legacy Java applications can be a significant burden for
              enterprises. They often lack the performance, scalability, and
              security features of modern applications.
            </p>
            {/* More content here */}
          </section>
        </div>
      </div>
    </Layout>
  );
}
