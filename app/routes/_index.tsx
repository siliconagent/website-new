import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "SiliconAgent.ai - AI-powered solutions for modern enterprises" },
    {
      name: "description",
      content:
        "SiliconAgent.ai offers AI-powered solutions for modern enterprises, including SiliconAgent Flow and SiliconAgent Transform.",
    },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="hero bg-blue-100 dark:bg-blue-900 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            AI-powered solutions for modern enterprises
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Transform your business with SiliconAgent.ai's cutting-edge AI
            solutions.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Request a Demo
          </Link>
        </div>
      </div>

      <div className="products py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flow-product">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              SiliconAgent Flow
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Build complex workflows through conversation, not code.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
              <li>Reduce automation development time by 70%</li>
              <li>No technical expertise required</li>
              <li>Enterprise-grade reliability with Temporal</li>
              <li>AI-powered suggestions</li>
            </ul>
            <Link
              to="/flow"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              Learn More
            </Link>
          </div>

          <div className="transform-product">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              SiliconAgent Transform
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Upgrade, migrate, and modernize legacy systems with AI precision.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
              <li>Reduce modernization time and cost by 60%</li>
              <li>Minimize risk with automated testing</li>
              <li>Preserve business logic</li>
              <li>Continuous operation during transformation</li>
            </ul>
            <Link
              to="/transform"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="blog-teaser py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-8">
            Latest from our Blog
          </h2>
          {/* Blog teaser content here */}
          <p className="text-gray-600 dark:text-gray-300">
            Stay updated with the latest AI trends and insights.
          </p>
          <Link
            to="/blog"
            className="text-blue-500 hover:text-blue-700 font-bold mt-4 inline-block"
          >
            Read More
          </Link>
        </div>
      </div>
    </Layout>
  );
}
