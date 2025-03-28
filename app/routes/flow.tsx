import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "SiliconAgent Flow - Conversational Workflow Builder" },
    {
      name: "description",
      content:
        "SiliconAgent Flow is a conversational workflow building platform backed by Temporal, used for automation and integrations.",
    },
  ];
};

export default function Flow() {
  return (
    <Layout>
      <div className="product-page py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            SiliconAgent Flow
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Build complex workflows through conversation, not code.
          </p>

          <section className="overview mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              SiliconAgent Flow is a revolutionary platform that allows you to
              build and automate complex workflows using a conversational
              interface. Powered by Temporal, it ensures enterprise-grade
              reliability and scalability.
            </p>
          </section>

          <section className="features mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Conversational Interface
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Build workflows by simply describing what you want to
                  achieve.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Temporal Backend
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ensures reliable and scalable workflow execution.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Pre-built Integrations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Connect to popular services and applications with ease.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  AI Recommendations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get intelligent suggestions to optimize your workflows.
                </p>
              </li>
            </ul>
          </section>

          <section className="pricing mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Pricing
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Contact us for custom pricing plans tailored to your needs.
            </p>
          </section>

          <section className="documentation">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Documentation
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Access our comprehensive documentation to get started with
              SiliconAgent Flow.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
