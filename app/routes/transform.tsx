import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "SiliconAgent Transform - Legacy System Modernization" },
    {
      name: "description",
      content:
        "SiliconAgent Transform is an enterprise platform for modernizing legacy systems, including Java upgrades and UI modernization.",
    },
  ];
};

export default function Transform() {
  return (
    <Layout>
      <div className="product-page py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            SiliconAgent Transform
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Upgrade, migrate, and modernize legacy systems with AI precision.
          </p>

          <section className="overview mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              SiliconAgent Transform is an enterprise platform designed to
              modernize legacy systems using AI-powered tools and techniques.
              We help you upgrade your technology stack while preserving your
              valuable business logic.
            </p>
          </section>

          <section className="services mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Services
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Java Upgrades
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Seamlessly upgrade your Java applications to the latest
                  versions.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Framework Migration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Migrate from outdated frameworks like Struts to modern
                  frameworks like Spring.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  UI Modernization
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transform legacy UIs into responsive and modern web
                  applications.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  API Transformation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Modernize your APIs for better performance and scalability.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Legacy to modern stack transformation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transform your legacy systems to a modern technology stack.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Introducing AI into your existing products and codebases
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Introduce AI capabilities into your existing products and
                  codebases.
                </p>
              </li>
            </ul>
          </section>

          <section className="technologies mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We leverage the latest technologies to ensure a smooth and
              efficient transformation process.
            </p>
          </section>

          <section className="case-studies">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Case Studies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore our case studies to see how we've helped other
              enterprises modernize their systems.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
