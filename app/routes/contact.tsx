import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - SiliconAgent.ai" },
    {
      name: "description",
      content: "Contact SiliconAgent.ai for sales inquiries or support.",
    },
  ];
};

export default function Contact() {
  return (
    <Layout>
      <div className="contact-page py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4">
            Contact Us
          </h1>

          <section className="contact-form mb-8">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Send us a Message
            </h2>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="jane.doe@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-message"
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </form>
          </section>

          <section className="contact-info">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Sales: sales@siliconagent.ai
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Support: support@siliconagent.ai
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              123 Main Street, Anytown, USA
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
