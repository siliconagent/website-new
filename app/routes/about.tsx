import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us - SiliconAgent.ai" },
    {
      name: "description",
      content: "Learn more about SiliconAgent.ai, our team, and our mission.",
    },
  ];
};

export default function About() {
  return (
    <Layout>
      <div className="about-page py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            About Us
          </h1>

          <section className="our-mission mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              To empower modern enterprises with AI-powered solutions that
              drive innovation and efficiency.
            </p>
          </section>

          <section className="our-team mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Placeholder for team member profiles */}
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="rounded-full mb-2"
                />
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  John Doe
                </h3>
                <p className="text-gray-500 dark:text-gray-400">CEO</p>
              </div>
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="rounded-full mb-2"
                />
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Jane Smith
                </h3>
                <p className="text-gray-500 dark:text-gray-400">CTO</p>
              </div>
              <div className="team-member">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="rounded-full mb-2"
                />
                <h3 className="font-bold text-blue-600 dark:text-blue-300">
                  Peter Jones
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Head of Engineering
                </p>
              </div>
            </div>
          </section>

          <section className="partners">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Partners
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We collaborate with leading technology partners to deliver
              exceptional solutions.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
