import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { 
  FiMessageSquare, 
  FiCpu, 
  FiRefreshCw, 
  FiCode, 
  FiServer, 
  FiGrid,
  FiTrendingUp, 
  FiLayers, 
  FiShield, 
  FiGlobe, 
  FiArrowRight, 
  FiPlay,
  FiClock,
  FiCheckCircle,
  FiChevronRight,
  FiDatabase,
  FiLayout,
  FiStar
} from "react-icons/fi";
import { Button } from "~/components/ui/Button";
import { Card, CardContent } from "~/components/ui/Card";

export const meta: MetaFunction = () => {
  return [
    { title: "SiliconAgent.ai - AI-powered solutions for modern enterprises" },
    {
      name: "description",
      content:
        "SiliconAgent.ai offers AI-powered solutions for modern enterprises, including SiliconAgent Flow for conversational workflow automation and SiliconAgent Transform for legacy system modernization.",
    },
  ];
};

export default function Index() {
  const [activeTab, setActiveTab] = useState<'flow' | 'transform'>('flow');

  return (
    <Layout>
      {/* Hero Section with animated gradient background */}
      <div className="hero bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-950 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 font-medium rounded-full px-3 py-1 text-sm mb-4">
                Intelligent Enterprise Solutions
              </span>
              <h1 className="text-5xl font-bold text-blue-800 dark:text-blue-200 mb-6 leading-tight">
                AI-powered solutions for modern enterprises
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                Transform your business with SiliconAgent.ai's cutting-edge AI solutions for workflow automation and legacy system modernization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    Request a Demo <FiArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900">
                  <div className="flex items-center">
                    <FiPlay className="mr-2" /> Watch Overview
                  </div>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <FiPlay className="w-16 h-16 mx-auto mb-2" />
                      <p>Product Demo Video</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div className="w-1/2 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <div className="flex items-center">
                        <FiMessageSquare className="text-blue-500 mr-2" />
                        <span className="font-medium">Flow</span>
                      </div>
                    </div>
                    <div className="w-1/2 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
                      <div className="flex items-center">
                        <FiRefreshCw className="text-indigo-500 mr-2" />
                        <span className="font-medium">Transform</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50 z-0"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-50 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-6">
            TRUSTED BY INNOVATIVE COMPANIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Company logos would go here - using placeholders */}
            {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded opacity-50"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section with Tabs */}
      <div className="products py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the right solution for your business needs
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <button
                onClick={() => setActiveTab('flow')}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'flow'
                    ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <FiMessageSquare className="mr-2" />
                Flow
              </button>
              <button
                onClick={() => setActiveTab('transform')}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  activeTab === 'transform'
                    ? 'bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <FiRefreshCw className="mr-2" />
                Transform
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeTab === 'flow' ? (
              <>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                      <FiMessageSquare className="text-blue-600 dark:text-blue-400 w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                        SiliconAgent Flow
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Build complex workflows through conversation, not code
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our conversational workflow building platform backed by Temporal helps you 
                    automate processes and integrate systems with unparalleled ease and reliability.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <FiClock className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">70% Faster Development</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Build in minutes what used to take days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiServer className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Enterprise Reliability</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Temporal backend ensures durability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiCpu className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">AI-Powered Suggestions</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Intelligent optimization recommendations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiGrid className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">200+ Integrations</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Connect with your existing tools
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/flow"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </Link>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    How SiliconAgent Flow Works
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          Describe Your Workflow
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Simply tell Flow what you want to automate using natural language.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          Flow Builds It For You
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Flow automatically creates the workflow, connecting services and implementing logic.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          Deploy & Monitor
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          With a single command, deploy to production and monitor performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      <p className="mb-2"><span className="text-blue-500">User:</span> I need a workflow that syncs customer data between Salesforce and our database</p>
                      <p><span className="text-green-500">Flow:</span> I'll create that for you. Should this run on a schedule or when data changes?</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mr-4">
                      <FiRefreshCw className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                        SiliconAgent Transform
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Upgrade, migrate, and modernize legacy systems with AI precision
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our AI-powered platform helps enterprises modernize legacy systems, 
                    from Java upgrades to UI transformations, while preserving business logic.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <FiTrendingUp className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">60% Reduced Cost</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Lower modernization time and expense
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiShield className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Minimized Risk</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Automated testing and validation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiCode className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Preserved Logic</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Keep business logic while upgrading
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FiLayers className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Zero Downtime</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Continuous operation during updates
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/transform"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </Link>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Transformation Services
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-2">
                        <FiCode className="text-indigo-500 mr-2" />
                        <h4 className="font-bold">Java Upgrades</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Modernize Java applications to the latest versions with automated code transformation.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-2">
                        <FiServer className="text-indigo-500 mr-2" />
                        <h4 className="font-bold">Framework Migration</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Migrate from Struts to Spring, Angular to React, and other framework transitions.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-2">
                        <FiLayout className="text-indigo-500 mr-2" />
                        <h4 className="font-bold">UI Modernization</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Transform static HTML sites into responsive, modern web applications.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center mb-2">
                        <FiDatabase className="text-indigo-500 mr-2" />
                        <h4 className="font-bold">Database Upgrades</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Modernize database schemas and migrate data to newer, more efficient systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Our Migration Process</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="text-center px-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mx-auto mb-2">
                          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">1</span>
                        </div>
                        <p className="text-xs">Analysis</p>
                      </div>
                      <FiChevronRight className="hidden sm:block text-gray-400" />
                      <div className="text-center px-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mx-auto mb-2">
                          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">2</span>
                        </div>
                        <p className="text-xs">Planning</p>
                      </div>
                      <FiChevronRight className="hidden sm:block text-gray-400" />
                      <div className="text-center px-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mx-auto mb-2">
                          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">3</span>
                        </div>
                        <p className="text-xs">Transformation</p>
                      </div>
                      <FiChevronRight className="hidden sm:block text-gray-400" />
                      <div className="text-center px-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mx-auto mb-2">
                          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">4</span>
                        </div>
                        <p className="text-xs">Testing</p>
                      </div>
                      <FiChevronRight className="hidden sm:block text-gray-400" />
                      <div className="text-center px-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mx-auto mb-2">
                          <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold">5</span>
                        </div>
                        <p className="text-xs">Deployment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose SiliconAgent.ai
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine AI expertise with enterprise-grade reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center mb-4">
                  <FiCpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-First Approach</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our solutions leverage cutting-edge AI to deliver automation and modernization capabilities that get smarter over time.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center mb-4">
                  <FiShield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We adhere to the highest security standards with SOC 2 compliance, encryption, and role-based access controls.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center mb-4">
                  <FiGlobe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our team brings decades of experience in enterprise technology, workflow automation, and system modernization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Case Study Highlight */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-blue-600 p-8 text-white">
                <div className="mb-4">
                  <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
                    Case Study
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  How FinTech Global Reduced Development Time by 70%
                </h3>
                <p className="mb-4">
                  Learn how a leading financial services company automated their customer onboarding process with SiliconAgent Flow.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white mr-3"></div>
                  <div>
                    <p className="font-medium">Michael Rodriguez</p>
                    <p className="text-sm text-blue-200">Head of DevOps</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <FiCheckCircle className="text-green-500 mr-2" />
                  <p><span className="font-bold">Challenge:</span> Manual onboarding processes taking 2+ weeks per customer</p>
                </div>
                <div className="flex items-center mb-4">
                  <FiCheckCircle className="text-green-500 mr-2" />
                  <p><span className="font-bold">Solution:</span> Implemented SiliconAgent Flow to automate the entire workflow</p>
                </div>
                <div className="flex items-center mb-6">
                  <FiCheckCircle className="text-green-500 mr-2" />
                  <p><span className="font-bold">Result:</span> Reduced onboarding time to 3 days with zero manual errors</p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">90%</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">Reduction in manual tasks</span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">5x</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">ROI in first year</span>
                  </div>
                </div>
                <Button className="mt-4">
                  <div className="flex items-center">
                    Read Full Case Study <FiArrowRight className="ml-2" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Teaser Section */}
      <div className="blog-teaser py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Latest from our Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest AI trends and industry insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="/images/blog-1.jpg" 
                alt="AI Workflows" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                    Flow
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
                    March 20, 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  5 Ways AI is Transforming Workflow Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Discover how AI-powered workflow tools are changing how businesses operate and automate processes.
                </p>
                <Link
                  to="/blog/ai-workflow-automation"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read Article <FiArrowRight className="ml-2" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="/images/blog-2.jpg" 
                alt="Legacy Modernization" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded">
                    Transform
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
                    March 15, 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  The True Cost of Maintaining Legacy Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We break down the hidden costs of keeping outdated systems running and why modernization pays off.
                </p>
                <Link
                  to="/blog/legacy-system-costs"
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                >
                  Read Article <FiArrowRight className="ml-2" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="/images/blog-3.jpg" 
                alt="AI in Enterprise" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                    Industry
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
                    March 10, 2025
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Enterprise AI Implementation: Best Practices
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn the key strategies for successfully implementing AI solutions in enterprise environments.
                </p>
                <Link
                  to="/blog/enterprise-ai-implementation"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read Article <FiArrowRight className="ml-2" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-md bg-blue-50 dark:bg-blue-900/20 px-6 py-3 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              View All Articles <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Get started with SiliconAgent.ai today and see how our AI-powered solutions can revolutionize your workflows and modernize your systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/contact" className="flex items-center">
                  Request a Demo <FiArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <Link to="/contact" className="flex items-center">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

