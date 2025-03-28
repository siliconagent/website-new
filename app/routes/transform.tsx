import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import { useState } from "react";
import { 
  FiRefreshCw, 
  FiCode, 
  FiLayers, 
  FiServer, 
  FiLayout, 
  FiDatabase,
  FiCpu, 
  FiShield, 
  FiTrendingUp, 
  FiCheckCircle, 
  FiArrowRight,
  FiGlobe,
  FiZap,
  FiPackage,
  FiMonitor,
  FiCloudLightning,
  FiMessageSquare
} from "react-icons/fi";
import { Button } from "~/components/ui/Button";
import { Card, CardContent } from "~/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/Tabs";

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
  const [activeService, setActiveService] = useState('java');

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-900 dark:to-purple-950 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="inline-block bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-200 font-medium rounded-full px-3 py-1 text-sm mb-4">
                Legacy System Modernization
              </span>
              <h1 className="text-5xl font-bold text-indigo-800 dark:text-indigo-200 mb-6 leading-tight">
                SiliconAgent Transform
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                Upgrade, migrate, and modernize legacy systems with AI precision while preserving your valuable business logic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Request a Demo <FiArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900">
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                      <FiRefreshCw className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">AI-Powered Transformation</h3>
                      <p className="text-gray-600 dark:text-gray-400">Modernize with precision and reliability</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                      <FiCpu className="text-indigo-500 mr-3" />
                      <span className="text-sm">AI Analysis</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                      <FiCode className="text-indigo-500 mr-3" />
                      <span className="text-sm">Code Transformation</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                      <FiShield className="text-indigo-500 mr-3" />
                      <span className="text-sm">Automated Testing</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                      <FiTrendingUp className="text-indigo-500 mr-3" />
                      <span className="text-sm">Performance Tuning</span>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-50 z-0"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="product-page py-16">
        <div className="container mx-auto px-6">
          {/* Overview Section */}
          <section className="overview mb-16">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                <FiRefreshCw className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Overview
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  SiliconAgent Transform is an enterprise platform designed to modernize legacy systems using AI-powered tools and techniques. 
                  We help you upgrade your technology stack while preserving your valuable business logic.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our approach combines AI analysis, automated code transformation, and rigorous testing to ensure a smooth transition with minimal risk.
                  Whether you're upgrading Java applications, migrating from Struts to Spring, or transforming legacy UIs into modern web applications,
                  our platform delivers consistent, reliable results.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="rounded-full bg-green-100 dark:bg-green-900 p-2 mr-3 mt-1">
                      <FiCheckCircle className="text-green-600 dark:text-green-400 w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">60% Reduced Cost</h3>
                      <p className="text-gray-600 dark:text-gray-400">Lower modernization expenses</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-green-100 dark:bg-green-900 p-2 mr-3 mt-1">
                      <FiCheckCircle className="text-green-600 dark:text-green-400 w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Minimized Risk</h3>
                      <p className="text-gray-600 dark:text-gray-400">Automated testing and validation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-green-100 dark:bg-green-900 p-2 mr-3 mt-1">
                      <FiCheckCircle className="text-green-600 dark:text-green-400 w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Preserved Logic</h3>
                      <p className="text-gray-600 dark:text-gray-400">Keep business logic while upgrading</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-green-100 dark:bg-green-900 p-2 mr-3 mt-1">
                      <FiCheckCircle className="text-green-600 dark:text-green-400 w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Zero Downtime</h3>
                      <p className="text-gray-600 dark:text-gray-400">Continuous operation during updates</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-100 dark:border-indigo-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Transform Process</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Analysis</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        AI-powered code analysis identifies modernization opportunities
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Planning</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Detailed transformation plan with risk assessment
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Transformation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Automated code transformation with human oversight
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Testing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Comprehensive testing ensures functional equivalence
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Deployment</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Zero-downtime deployment with rollback capability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="services mb-16">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                <FiServer className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Transformation Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
              <div className="lg:col-span-2 space-y-2">
                <button 
                  onClick={() => setActiveService('java')}
                  className={`w-full flex items-center p-4 rounded-lg transition-colors ${
                    activeService === 'java'
                      ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } border border-gray-200 dark:border-gray-700`}
                >
                  <FiCode className={`mr-3 ${activeService === 'java' ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                  <span className="font-medium">Java Upgrades</span>
                </button>
                
                <button 
                  onClick={() => setActiveService('framework')}
                  className={`w-full flex items-center p-4 rounded-lg transition-colors ${
                    activeService === 'framework'
                      ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } border border-gray-200 dark:border-gray-700`}
                >
                  <FiPackage className={`mr-3 ${activeService === 'framework' ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                  <span className="font-medium">Framework Migration</span>
                </button>
                
                <button 
                  onClick={() => setActiveService('ui')}
                  className={`w-full flex items-center p-4 rounded-lg transition-colors ${
                    activeService === 'ui'
                      ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } border border-gray-200 dark:border-gray-700`}
                >
                  <FiLayout className={`mr-3 ${activeService === 'ui' ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                  <span className="font-medium">UI Modernization</span>
                </button>
                
                <button 
                  onClick={() => setActiveService('api')}
                  className={`w-full flex items-center p-4 rounded-lg transition-colors ${
                    activeService === 'api'
                      ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } border border-gray-200 dark:border-gray-700`}
                >
                  <FiGlobe className={`mr-3 ${activeService === 'api' ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                  <span className="font-medium">API Transformation</span>
                </button>
                
                <button 
                  onClick={() => setActiveService('stack')}
                  className={`w-full flex items-center p-4 rounded-lg transition-colors ${
                    activeService === 'stack'
                      ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } border border-gray-200 dark:border-gray-700`}
                >
                  <FiLayers className={`mr-3 ${activeService === 'stack' ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                  <span className="font-medium">Stack Transformation</span>
                </button>
                
                <button 
                  onClick={() => setActiveService('ai')}
                  className={`w-full flex items-center p-4 rounded-lg transition-colors ${
                    activeService === 'ai'
                      ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } border border-gray-200 dark:border-gray-700`}
                >
                  <FiCpu className={`mr-3 ${activeService === 'ai' ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                  <span className="font-medium">AI Integration</span>
                </button>
              </div>
              
              <div className="lg:col-span-4 bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                {activeService === 'java' && (
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                        <FiCode className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Java Upgrades
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Seamlessly upgrade your Java applications to the latest versions with automated code analysis, transformation, and testing.
                      Our platform identifies deprecated APIs, language features, and patterns, then transforms them to modern equivalents.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Upgrade Paths:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-center">Java 6 → Java 8+</div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-center">Java 8 → Java 11+</div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-center">Java 11 → Java 17+</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Automated identification of deprecated APIs and language features</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Intelligent refactoring to use modern Java language features</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Comprehensive test coverage to ensure functional equivalence</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Detailed reporting and documentation of all changes</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Learn More About Java Upgrades
                      </Button>
                    </div>
                  </div>
                )}
                
                {activeService === 'framework' && (
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                        <FiPackage className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Framework Migration
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Migrate from outdated frameworks to modern alternatives while preserving functionality and business logic.
                      Our AI-powered platform analyzes your codebase, maps concepts between frameworks, and generates equivalent code.
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Common Migrations:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded mr-3"></div>
                            <span>Struts</span>
                          </div>
                          <FiArrowRight className="text-indigo-500" />
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-300 dark:bg-green-700 rounded mr-3"></div>
                            <span>Spring</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-300 dark:bg-red-700 rounded mr-3"></div>
                            <span>Angular.js</span>
                          </div>
                          <FiArrowRight className="text-indigo-500" />
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-300 dark:bg-blue-700 rounded mr-3"></div>
                            <span>React</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Migration Process:</h4>
                      <ol className="space-y-2">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                          </div>
                          <span>Analyze source framework codebase and architecture</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">2</span>
                          </div>
                          <span>Map concepts and patterns to target framework</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">3</span>
                          </div>
                          <span>Automatically generate equivalent code in target framework</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">4</span>
                          </div>
                          <span>Test and validate functional equivalence</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">5</span>
                          </div>
                          <span>Deploy with zero downtime using blue-green deployment</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Learn More About Framework Migration
                      </Button>
                    </div>
                  </div>
                )}
                
                {activeService === 'ui' && (
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                        <FiLayout className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        UI Modernization
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Transform legacy UIs into responsive, modern web applications that work across all devices.
                      Our platform analyzes your existing UI, extracts Transform legacy UIs into responsive, modern web applications that work across all devices.
                      Our platform analyzes your existing UI, extracts design patterns and business logic, then rebuilds it using modern frameworks and responsive design principles.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                          <FiMonitor className="text-indigo-500 mr-2" /> Before
                        </h4>
                        <div className="border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 p-3 h-32 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 mb-2"></div>
                            <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 mb-2"></div>
                            <div className="w-3/4 mx-auto h-4 bg-gray-300 dark:bg-gray-700 mb-2"></div>
                            <div className="w-1/2 mx-auto h-6 bg-gray-400 dark:bg-gray-600 mt-4"></div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          Static, non-responsive legacy UI
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                          <FiMonitor className="text-green-500 mr-2" /> After
                        </h4>
                        <div className="border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 p-3 h-32 flex items-center justify-center">
                          <div className="text-center w-full">
                            <div className="w-full h-4 bg-indigo-300 dark:bg-indigo-700 mb-2 rounded-full"></div>
                            <div className="w-full h-4 bg-indigo-300 dark:bg-indigo-700 mb-2 rounded-full"></div>
                            <div className="w-3/4 mx-auto h-4 bg-indigo-300 dark:bg-indigo-700 mb-2 rounded-full"></div>
                            <div className="w-1/2 mx-auto h-6 bg-indigo-500 dark:bg-indigo-600 mt-4 rounded-full"></div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          Modern, responsive UI that works on all devices
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Modernization Options:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Static HTML to responsive React/Angular/Vue</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Legacy desktop UIs to web applications</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Monolithic UIs to component-based architecture</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Accessibility and internationalization improvements</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Learn More About UI Modernization
                      </Button>
                    </div>
                  </div>
                )}
                
                {activeService === 'api' && (
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                        <FiGlobe className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        API Transformation
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Modernize your APIs for better performance, scalability, and developer experience.
                      Our platform can transform legacy SOAP services to REST/GraphQL, upgrade API versions, 
                      and implement modern security practices.
                    </p>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">API Transformation Services:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                          <h5 className="font-medium text-gray-900 dark:text-white flex items-center mb-2">
                            <FiZap className="text-indigo-500 mr-2" /> SOAP to REST/GraphQL
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Transform verbose SOAP services into modern, lightweight REST or GraphQL APIs
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                          <h5 className="font-medium text-gray-900 dark:text-white flex items-center mb-2">
                            <FiShield className="text-indigo-500 mr-2" /> API Security Modernization
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Upgrade to OAuth 2.0, JWT, and other modern security standards
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                          <h5 className="font-medium text-gray-900 dark:text-white flex items-center mb-2">
                            <FiTrendingUp className="text-indigo-500 mr-2" /> Performance Optimization
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Improve API performance with caching, pagination, and efficient data formats
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                          <h5 className="font-medium text-gray-900 dark:text-white flex items-center mb-2">
                            <FiCode className="text-indigo-500 mr-2" /> API Versioning
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Implement proper versioning and backward compatibility strategies
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Benefits:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center">
                          <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                          <span>Improved developer experience</span>
                        </li>
                        <li className="flex items-center">
                          <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                          <span>Reduced latency and bandwidth</span>
                        </li>
                        <li className="flex items-center">
                          <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                          <span>Better security practices</span>
                        </li>
                        <li className="flex items-center">
                          <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                          <span>Easier system integration</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Learn More About API Transformation
                      </Button>
                    </div>
                  </div>
                )}
                
                {activeService === 'stack' && (
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                        <FiLayers className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Legacy to Modern Stack Transformation
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Transform your entire legacy technology stack to a modern, cloud-native architecture.
                      Our comprehensive approach ensures all components work together harmoniously while preserving business logic.
                    </p>
                    
                    <div className="mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <FiServer className="text-red-500 mr-2" /> Legacy Stack
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                              <span className="w-4 h-4 bg-red-200 dark:bg-red-900 rounded-full mr-2"></span>
                              <span>Monolithic Architecture</span>
                            </li>
                            <li className="flex items-center p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                              <span className="w-4 h-4 bg-red-200 dark:bg-red-900 rounded-full mr-2"></span>
                              <span>On-Premise Infrastructure</span>
                            </li>
                            <li className="flex items-center p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                              <span className="w-4 h-4 bg-red-200 dark:bg-red-900 rounded-full mr-2"></span>
                              <span>Heavyweight Frameworks</span>
                            </li>
                            <li className="flex items-center p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                              <span className="w-4 h-4 bg-red-200 dark:bg-red-900 rounded-full mr-2"></span>
                              <span>Manual Deployment Processes</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <FiServer className="text-green-500 mr-2" /> Modern Stack
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-center p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                              <span className="w-4 h-4 bg-green-200 dark:bg-green-900 rounded-full mr-2"></span>
                              <span>Microservices Architecture</span>
                            </li>
                            <li className="flex items-center p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                              <span className="w-4 h-4 bg-green-200 dark:bg-green-900 rounded-full mr-2"></span>
                              <span>Cloud-Native Infrastructure</span>
                            </li>
                            <li className="flex items-center p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                              <span className="w-4 h-4 bg-green-200 dark:bg-green-900 rounded-full mr-2"></span>
                              <span>Lightweight, Modern Frameworks</span>
                            </li>
                            <li className="flex items-center p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                              <span className="w-4 h-4 bg-green-200 dark:bg-green-900 rounded-full mr-2"></span>
                              <span>CI/CD Automation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Our Approach:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Incremental transformation with continuous operation</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Domain-driven decomposition of monoliths</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Comprehensive testing at each transformation stage</span>
                        </li>
                        <li className="flex items-start">
                          <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>Automated infrastructure provisioning and deployment</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Learn More About Stack Transformation
                      </Button>
                    </div>
                  </div>
                )}
                
                {activeService === 'ai' && (
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                        <FiCpu className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        AI Integration for Existing Products
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Introduce AI capabilities into your existing products and codebases without a complete rewrite.
                      Our platform identifies opportunities for AI enhancement and implements them with minimal disruption.
                    </p>
                    
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">AI Integration Options:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center mb-2">
                            <FiCloudLightning className="text-indigo-500 mr-2" />
                            <h5 className="font-medium">Predictive Analytics</h5>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Add forecasting and trend detection to existing data systems
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center mb-2">
                            <FiMessageSquare className="text-indigo-500 mr-2" />
                            <h5 className="font-medium">Conversational Interfaces</h5>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Integrate chatbots and natural language processing capabilities
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center mb-2">
                            <FiZap className="text-indigo-500 mr-2" />
                            <h5 className="font-medium">Intelligent Automation</h5>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Enhance existing workflows with AI-driven decision making
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center mb-2">
                            <FiMonitor className="text-indigo-500 mr-2" />
                            <h5 className="font-medium">Computer Vision</h5>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Add image recognition and processing to existing applications
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Integration Process:</h4>
                      <ol className="space-y-2">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                          </div>
                          <span>AI opportunity assessment in existing codebase</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">2</span>
                          </div>
                          <span>Architecture planning for AI integration</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">3</span>
                          </div>
                          <span>Implementation with modular, non-disruptive approach</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">4</span>
                          </div>
                          <span>Model training with your domain-specific data</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3 mt-1">
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">5</span>
                          </div>
                          <span>Continuous improvement and feedback loops</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="flex justify-center">
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Learn More About AI Integration
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="technologies mb-16">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                <FiLayers className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Technologies
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              We leverage the latest technologies to ensure a smooth and efficient transformation process,
              combining AI-powered tools with industry-standard platforms.
            </p>
            
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                <TabsTrigger value="languages" className="flex items-center gap-2">
                  <FiCode className="w-5 h-5" />
                  <span>Languages</span>
                </TabsTrigger>
                <TabsTrigger value="frameworks" className="flex items-center gap-2">
                  <FiPackage className="w-5 h-5" />
                  <span>Frameworks</span>
                </TabsTrigger>
                <TabsTrigger value="cloud" className="flex items-center gap-2">
                  <FiCloudLightning className="w-5 h-5" />
                  <span>Cloud & DevOps</span>
                </TabsTrigger>
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <FiCpu className="w-5 h-5" />
                  <span>AI & ML</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="languages">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Java', 'JavaScript', 'TypeScript', 'Python', 'C#', 'Go', 'Kotlin', 'Swift'].map((lang) => (
                    <div key={lang} className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                        <FiCode className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span>{lang}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="frameworks">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Spring', 'React', 'Angular', 'Vue', 'Django', '.NET Core', 'Express', 'Rails'].map((framework) => (
                    <div key={framework} className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                        <FiPackage className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span>{framework}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cloud">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform', 'GitLab CI'].map((tool) => (
                    <div key={tool} className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                        <FiCloudLightning className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="ai">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Scikit-learn', 'NLP', 'Computer Vision', 'MLOps'].map((tech) => (
                    <div key={tech} className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-3">
                        <FiCpu className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Case Studies Section */}
          <section className="case-studies mb-16">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                <FiCheckCircle className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Case Studies
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Explore our case studies to see how we've helped enterprises modernize their systems, 
              reduce costs, and accelerate innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <CardContent className="p-6">
                  <div className="inline-block bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 px-2 py-1 text-sm rounded mb-3">
                    Java Modernization
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Financial Services Firm Upgrades Legacy Java Platform
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Learn how we helped a major financial services company upgrade their Java 6 platform to Java 17, reducing operational costs by 60%.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">4x</span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">performance boost</span>
                    </div>
                    <Button variant="outline" className="text-indigo-600 border-indigo-600">
                      Read Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <CardContent className="p-6">
                  <div className="inline-block bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 px-2 py-1 text-sm rounded mb-3">
                    UI Modernization
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Healthcare Provider Transforms Patient Portal
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    See how we transformed a legacy healthcare patient portal into a modern, responsive application that improved patient satisfaction.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">92%</span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">patient satisfaction</span>
                    </div>
                    <Button variant="outline" className="text-indigo-600 border-indigo-600">
                      Read Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <CardContent className="p-6">
                  <div className="inline-block bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 px-2 py-1 text-sm rounded mb-3">
                    Stack Transformation
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Retail Giant Moves to Microservices Architecture
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Discover how we helped a major retailer transform their monolithic e-commerce platform into a scalable microservices architecture.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">300%</span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">scalability increase</span>
                    </div>
                    <Button variant="outline" className="text-indigo-600 border-indigo-600">
                      Read Case Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                View All Case Studies <FiArrowRight className="ml-2" />
              </Button>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg p-8 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to modernize your legacy systems?
              </h2>
              <p className="text-xl mb-8 text-indigo-100">
                Get started with SiliconAgent Transform today and see how our AI-powered platform can help you upgrade, migrate, and modernize your systems with minimal risk.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
                  Request a Demo <FiArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700">
                  Contact Sales
                </Button>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 mr-4">
                <FiMessageSquare className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2">How long does a typical modernization project take?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Project timelines vary based on complexity and scope, but our AI-powered approach significantly reduces traditional timeframes. 
                  A typical Java upgrade might take 2-3 months, while a complete stack transformation could take 6-12 months. 
                  We work with you to establish realistic milestones and deliver value incrementally.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2">How do you ensure business continuity during transformation?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We employ a parallel development approach with comprehensive testing at each stage. 
                  Our zero-downtime deployment strategy uses techniques like blue-green deployments and feature flags 
                  to ensure your systems remain operational throughout the transformation process.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2">How do you preserve business logic during modernization?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI-powered analysis tools extract and document existing business logic before any transformation begins. 
                  We use automated testing to ensure functional equivalence, and our transformation process prioritizes 
                  preserving business logic while upgrading the technical implementation.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold mb-2">What level of involvement is required from our team?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  While our platform reduces the technical lift, we do require collaboration with your subject matter experts 
                  to understand business requirements and validate transformations. We typically work with a small team of your 
                  developers, architects, and business analysts to ensure successful outcomes.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}