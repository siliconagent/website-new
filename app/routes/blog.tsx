import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - SiliconAgent.ai" },
    {
      name: "description",
      content:
        "Read the latest articles on AI, enterprise technology, and modernization strategies from SiliconAgent.ai.",
    },
  ];
};

export default function Blog() {
  return (
    <Layout>
      <div className="blog-page py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            Blog
          </h1>

          <section className="featured-posts mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Featured Posts
            </h2>
            {/* Featured blog posts here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="blog-post">
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  AI-Powered Workflow Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn how AI is transforming workflow automation.
                </p>
              </div>
              <div className="blog-post">
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Modernizing Legacy Java Applications
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Best practices for upgrading your Java applications.
                </p>
              </div>
              <div className="blog-post">
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  The Future of Enterprise AI
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Exploring the latest trends in enterprise AI adoption.
                </p>
              </div>
            </div>
          </section>

          <section className="all-articles">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              All Articles
            </h2>
            {/* All blog articles listed here */}
            <ul className="list-none">
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  AI in Workflow Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Java Modernization Strategies
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
