import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { useState } from "react";
import { FiMessageSquare, FiCpu, FiBox, FiPlay, FiServer, FiShield, FiCode, FiTrendingUp, FiClock } from "react-icons/fi";
import { FaBrain as FiBrain } from "react-icons/fa";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/Tabs";
import { Testimonial } from "~/components/Testimonial";
import { FeatureCard } from "~/components/FeatureCard";
import { CTASection } from "~/components/CTASection";
import ExperienceCard from "~/components/ExperienceCard";

export const meta: MetaFunction = () => {
  return [
    { title: "SiliconAgent Flow - Conversational Workflow Builder" },
    {
      name: "description",
      content:
        "SiliconAgent Flow is a conversational AI workflow building platform backed by Temporal. Build complex workflows through conversation, not code.",
    },
  ];
};

export default function Flow() {
  const [activeDemo, setActiveDemo] = useState("conversation");

  return (
    <Layout>
      {/* Hero Section with Animated Visual */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-950 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 font-medium rounded-full px-3 py-1 text-sm mb-4">
                AI-Powered Workflow Automation
              </span>
              <h1 className="text-5xl font-bold text-blue-800 dark:text-blue-200 mb-4 leading-tight">
                Build workflows through conversation, not code
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                SiliconAgent Flow transforms how teams automate processes. Use natural language to create, deploy, and manage enterprise-grade workflows with unparalleled ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">Flow Conversation</div>
                </div>
                <div className="font-mono text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <p className="mb-2"><span className="text-blue-500">User:</span> I need a workflow that sends a Slack message when a new GitHub issue is assigned to my team</p>
                  <p className="mb-2"><span className="text-green-500">Flow:</span> I'll create that for you. Do you want to filter for specific labels or priorities?</p>
                  <p className="mb-2"><span className="text-blue-500">User:</span> Yes, only high priority issues with "urgent" label</p>
                  <p className="mb-2"><span className="text-green-500">Flow:</span> Got it. And which Slack channel should the notification go to?</p>
                  <p className="mb-2"><span className="text-blue-500">User:</span> #incident-response</p>
                  <p><span className="text-green-500">Flow:</span> Perfect. I've created your workflow. It will monitor GitHub for new issues with the "urgent" label and high priority, then send a notification to #incident-response. Would you like to test it now?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why teams choose SiliconAgent Flow
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our conversational workflow platform transforms how businesses automate processes, integrate systems, and optimize operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<FiMessageSquare className="w-6 h-6 text-blue-500" />}
              title="70% Faster Development"
              description="Build in minutes what used to take days. Natural language interfaces eliminate the learning curve."
            />
            <FeatureCard 
              icon={<FiServer className="w-6 h-6 text-blue-500" />}
              title="Enterprise Reliability"
              description="Built on Temporal for rock-solid workflow execution, with automatic retry and error handling."
            />
            <FeatureCard 
              icon={<FiBrain className="w-6 h-6 text-blue-500" />}
              title="AI-Powered Optimization"
              description="Get intelligent suggestions to improve workflows based on performance and usage patterns."
            />
            <FeatureCard 
              icon={<FiBox className="w-6 h-6 text-blue-500" />}
              title="200+ Pre-built Connectors"
              description="Integrate with your existing tools without custom code. From GitHub to Salesforce to custom APIs."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How SiliconAgent Flow Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From conversation to automation in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Describe Your Workflow</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Just tell Flow what you want to automate in plain language. No flowcharts or coding required.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Flow Builds It For You</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Flow automatically creates the workflow, connecting services and implementing logic based on your description.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Deploy & Monitor</h3>
              <p className="text-gray-600 dark:text-gray-400">
                With a single command, deploy your workflow to production and monitor performance through our intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Complex Workflows
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to automate your business processes
            </p>
          </div>
          
          <Tabs defaultValue="conversation" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="conversation" className="flex items-center gap-2">
                <FiMessageSquare className="w-5 h-5" />
                <span>Conversational UI</span>
              </TabsTrigger>
              <TabsTrigger value="temporal" className="flex items-center gap-2">
                <FiServer className="w-5 h-5" />
                <span>Temporal Backend</span>
              </TabsTrigger>
              <TabsTrigger value="integrations" className="flex items-center gap-2">
                <FiBox className="w-5 h-5" />
                <span>Integrations</span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <FiBrain className="w-5 h-5" />
                <span>AI Capabilities</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="conversation" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
                    Natural Language Workflow Building
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our conversational interface removes the complexity from workflow automation. Simply describe what you want to achieve, and Flow will handle the implementation details.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>No technical expertise required - anyone can build workflows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Interactive refinement - Flow asks clarifying questions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Edit existing workflows conversationally</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Natural language error handling and debugging</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
                    <p className="font-medium text-gray-900 dark:text-white mb-2">Example: Data Processing Workflow</p>
                    <div className="font-mono text-sm">
                      <p className="mb-2"><span className="text-blue-500">User:</span> I need a workflow that takes CSV uploads from Dropbox, cleans the data, and adds it to our Postgres database</p>
                      <p className="mb-2"><span className="text-green-500">Flow:</span> I can help with that. What columns need cleaning and what type of cleaning is needed?</p>
                      <p className="mb-2"><span className="text-blue-500">User:</span> Email columns need validation, and name columns need proper capitalization</p>
                      <p className="mb-2"><span className="text-green-500">Flow:</span> Got it. And which Postgres table should the data go to?</p>
                      <p><span className="text-blue-500">User:</span> The customers table</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="temporal" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
                    Enterprise-Grade Reliability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Built on Temporal's durable execution engine, SiliconAgent Flow ensures your workflows run reliably even in the face of failures and outages.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Automatic retry mechanisms for transient failures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Exactly-once execution semantics for critical operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Versioning and deployment management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Comprehensive audit trails and execution history</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <img 
                    src="/images/temporal-diagram.svg" 
                    alt="Temporal workflow execution diagram" 
                    className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Temporal's durable execution engine ensures workflows resume exactly where they left off after any failure.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="integrations" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
                    200+ Pre-built Integrations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Connect to virtually any service or application without writing custom integration code. Our extensive library of connectors covers everything from popular SaaS applications to databases and custom APIs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-medium">Data Sources</h4>
                      <ul className="text-sm">
                        <li>SQL Databases</li>
                        <li>NoSQL Databases</li>
                        <li>APIs</li>
                        <li>File Systems</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-medium">SaaS Tools</h4>
                      <ul className="text-sm">
                        <li>Salesforce</li>
                        <li>GitHub</li>
                        <li>Slack</li>
                        <li>Google Workspace</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-medium">Communication</h4>
                      <ul className="text-sm">
                        <li>Email</li>
                        <li>SMS</li>
                        <li>Push Notifications</li>
                        <li>Webhooks</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-medium">Cloud Services</h4>
                      <ul className="text-sm">
                        <li>AWS</li>
                        <li>Azure</li>
                        <li>Google Cloud</li>
                        <li>Cloudflare</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="grid grid-cols-4 gap-4">
                    {/* Integration logos would go here in a real implementation */}
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-4 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4">View All Integrations</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ai" className="mt-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
                    AI-Powered Workflow Intelligence
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Flow's AI capabilities go beyond just the conversational interface. Our platform continuously learns from workflow execution and provides intelligent recommendations to optimize performance and reliability.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Intelligent workflow suggestions based on your goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Anomaly detection in workflow execution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Predictive maintenance and failure prevention</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Automatic optimization recommendations</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-medium mb-4">AI-Generated Optimization Report</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Performance Score</span>
                          <span className="text-sm font-medium text-amber-500">83/100</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-1">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                        </div>
                      </div>
                      <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                        <p className="text-sm"><strong>Recommendation:</strong> This workflow shows a bottleneck at the data transformation step. Consider adding a caching layer or optimizing the transformation logic.</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <p className="text-sm"><strong>Success Pattern:</strong> Automatic retries on API rate limiting has increased reliability by 27%.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Common Use Cases
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              How teams are using SiliconAgent Flow to transform their operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center mb-4">
                  <FiCpu className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">IT Operations Automation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Automate incident response, infrastructure provisioning, and system monitoring with intelligent workflows.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automated incident triage and routing</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Self-healing infrastructure workflows</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Compliance validation and remediation</span>
                  </li>
                </ul>
                <Button variant="link" className="text-blue-600 dark:text-blue-400 p-0">
                  Read case study →
                </Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-purple-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900 w-12 h-12 flex items-center justify-center mb-4">
                  <FiCode className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Developer Workflows</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Streamline development processes from code review to deployment with automated workflows.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automated code review and testing</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>CI/CD pipeline orchestration</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Environment provisioning and management</span>
                  </li>
                </ul>
                <Button variant="link" className="text-purple-600 dark:text-purple-400 p-0">
                  Read case study →
                </Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-2 bg-green-600"></div>
              <div className="p-6">
                <div className="rounded-full bg-green-100 dark:bg-green-900 w-12 h-12 flex items-center justify-center mb-4">
                  <FiShield className="w-6 h-6 text-green-600 dark:text-green-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Integration</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Connect disparate systems and automate data flows across your entire organization.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Cross-system data synchronization</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>ETL workflow automation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Real-time data processing pipelines</span>
                  </li>
                </ul>
                <Button variant="link" className="text-green-600 dark:text-green-400 p-0">
                  Read case study →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how SiliconAgent Flow transforms your workflow automation experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExperienceCard
            icon={<FiClock className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            title="Accelerate Development"
            description="Experience how quickly you can build complex workflows through simple conversations. What used to take weeks now happens in hours."
            metricValue="70%"
            metricLabel="faster development time"
          />
          
          <ExperienceCard
            icon={<FiTrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            title="Improve Response Time"
            description="Watch your incident response workflows become more efficient with automation that virtually eliminates human error."
            metricValue="90%"
            metricLabel="reduction in response time"
          />
          
          <ExperienceCard
            icon={<FiShield className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            title="Enhance Reliability"
            description="Experience enterprise-grade reliability with Temporal's durable execution engine that ensures workflows resume after any failure."
            metricValue="99.9%"
            metricLabel="workflow completion rate"
          />
          
          <ExperienceCard
            icon={<FiCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            title="Simplify Integration"
            description="Connect to your existing tools and systems without writing complex integration code using our pre-built connectors."
            metricValue="200+"
            metricLabel="available integrations"
          />
        </div>
      </div>
    </section>
    
      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Flexible Pricing for Teams of All Sizes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that works best for your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold">$499</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Perfect for small teams getting started with workflow automation
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Up to 10 active workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>50 workflow executions/hour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>100+ integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Basic conversational UI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </div>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Most Popular
              </div>
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold">$1,499</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  For growing teams with more complex automation needs
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Up to 50 active workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>250 workflow executions/hour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>200+ integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Advanced conversational UI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Workflow versioning</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold">Custom</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  For organizations with advanced requirements and scale
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Unlimited active workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Unlimited workflow executions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All 200+ integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Elite conversational UI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Single Sign-On (SSO)</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6">Contact Sales</Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 dark:text-gray-400">
              Need a custom plan? <a href="#" className="text-blue-600 dark:text-blue-400 font-medium">Contact our sales team</a> to discuss your specific requirements.
            </p>
          </div>
        </div>
      </section>
      
      {/* Technical Documentation Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Documentation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to get started and succeed with SiliconAgent Flow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Getting Started Guides</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                      <span className="mr-2">📘</span> Introduction to Flow
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                      <span className="mr-2">🚀</span> Building Your First Workflow
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                      <span className="mr-2">🔌</span> Setting Up Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                      <span className="mr-2">🛠️</span> Advanced Configuration
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">API Reference</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Comprehensive API documentation for developers who want to extend Flow's capabilities.
                </p>
                <Button variant="outline" className="w-full">View API Docs</Button>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Tutorial Videos</h3>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <FiPlay className="w-12 h-12 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Watch step-by-step tutorials to master SiliconAgent Flow
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about SiliconAgent Flow
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">How does the conversational interface work?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our conversational interface uses advanced natural language processing to understand your workflow needs. Simply describe what you want to accomplish, and Flow will ask clarifying questions as needed to build a complete workflow. You can refine and modify your workflows through conversation as well.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">What is Temporal and why does it matter?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Temporal is a workflow orchestration engine that provides durable execution guarantees. In simpler terms, it ensures that your workflows will resume exactly where they left off after any failure, whether that's a network issue, a server crash, or any other problem. This makes Flow incredibly reliable for mission-critical business processes.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Do I need coding skills to use SiliconAgent Flow?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No, Flow is designed to be used by anyone, regardless of technical background. The conversational interface allows you to express your workflow needs in plain language. For advanced users who want more control, we do offer a code view where you can fine-tune workflows manually, but this is entirely optional.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Can I integrate with my existing systems?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, Flow comes with over 200 pre-built integrations for popular services and systems. If you need to connect to a custom or internal system, our open API allows you to build custom connectors, or our enterprise plan includes custom integration development as part of the service.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">How secure is SiliconAgent Flow?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Security is our top priority. Flow is SOC 2 Type II compliant, supports encryption at rest and in transit, and features role-based access controls. Enterprise customers can also leverage single sign-on (SSO) and advanced security features like IP restrictions and audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Ready to transform your workflows?"
        description="Get started with SiliconAgent Flow today and see how conversational workflow automation can revolutionize your business processes."
        primaryButtonText="Request a Demo"
        secondaryButtonText="Contact Sales"
        backgroundClass="bg-gradient-to-r from-blue-600 to-indigo-700"
      />
    </Layout>
  );
}