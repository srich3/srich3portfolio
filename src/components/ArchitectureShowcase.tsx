import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3,
  GitBranch,
  Cloud,
  Cpu,
  Network
} from 'lucide-react';

const ArchitectureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'scalable' | 'realtime' | 'monorepo'>('scalable');

  const architectures = {
    scalable: {
      title: "Scalable Web Application Architecture",
      description: "Enterprise-grade architecture for large-scale applications",
      components: [
        {
          name: "Load Balancer",
          icon: Network,
          description: "Distributes traffic across multiple instances",
          tech: "NGINX, AWS ALB"
        },
        {
          name: "API Gateway",
          icon: Globe,
          description: "Centralized API management and routing",
          tech: "Express.js, GraphQL"
        },
        {
          name: "Microservices",
          icon: Server,
          description: "Domain-specific services for modularity",
          tech: "Node.js, TypeScript"
        },
        {
          name: "Message Queue",
          icon: Zap,
          description: "Asynchronous processing and communication",
          tech: "Redis, RabbitMQ"
        },
        {
          name: "Database Cluster",
          icon: Database,
          description: "Distributed data storage with replication",
          tech: "PostgreSQL, MongoDB"
        },
        {
          name: "CDN",
          icon: Cloud,
          description: "Global content delivery network",
          tech: "CloudFlare, AWS CloudFront"
        }
      ]
    },
    realtime: {
      title: "Real-time Collaboration System",
      description: "Low-latency collaborative editing infrastructure",
      components: [
        {
          name: "WebRTC Signaling",
          icon: Network,
          description: "Peer-to-peer connection establishment",
          tech: "Socket.io, WebRTC"
        },
        {
          name: "CRDT Engine",
          icon: GitBranch,
          description: "Conflict-free replicated data types",
          tech: "Yjs, Automerge"
        },
        {
          name: "Presence Service",
          icon: Globe,
          description: "Real-time user presence and cursors",
          tech: "WebSockets, Redis"
        },
        {
          name: "Document Store",
          icon: Database,
          description: "Versioned document storage",
          tech: "MongoDB, PostgreSQL"
        },
        {
          name: "Event Streaming",
          icon: Zap,
          description: "Real-time event distribution",
          tech: "Apache Kafka, Redis Streams"
        },
        {
          name: "State Sync",
          icon: Server,
          description: "Operational transformation engine",
          tech: "Custom OT, ShareJS"
        }
      ]
    },
    monorepo: {
      title: "Monorepo Build Infrastructure",
      description: "Large-scale codebase management and build system",
      components: [
        {
          name: "Build System",
          icon: Cpu,
          description: "Incremental builds and caching",
          tech: "Bazel, Rush.js"
        },
        {
          name: "Package Manager",
          icon: Database,
          description: "Dependency resolution and hoisting",
          tech: "Rush.js, Yarn Workspaces"
        },
        {
          name: "CI/CD Pipeline",
          icon: GitBranch,
          description: "Automated testing and deployment",
          tech: "GitHub Actions, Jenkins"
        },
        {
          name: "Code Analysis",
          icon: BarChart3,
          description: "Static analysis and quality gates",
          tech: "ESLint, SonarQube"
        },
        {
          name: "Artifact Registry",
          icon: Cloud,
          description: "Package and build artifact storage",
          tech: "npm Registry, Artifactory"
        },
        {
          name: "Monitoring",
          icon: Shield,
          description: "Build performance and health monitoring",
          tech: "Grafana, DataDog"
        }
      ]
    }
  };

  const tabs = [
    { id: 'scalable', label: 'Scalable Systems', icon: Server },
    { id: 'realtime', label: 'Real-time Collaboration', icon: Zap },
    { id: 'monorepo', label: 'Build Infrastructure', icon: GitBranch }
  ];

  return (
    <section id="architecture" className="section-padding bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            System Architecture Expertise
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Proven experience designing and implementing large-scale, distributed systems 
            that power modern web applications
          </p>
        </motion.div>

        {/* Architecture Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'scalable' | 'realtime' | 'monorepo')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 text-base mx-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-3" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800 rounded-3xl p-8 md:p-12 mb-14 border border-slate-700"
        >
          <div className="text-center mb-10">
            {/* Main section icon */}
            <span className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4">
              {React.createElement(tabs.find(tab => tab.id === activeTab)?.icon || (() => null), { className: 'w-7 h-7 text-white' })}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{architectures[activeTab].title}</h3>
            <p className="text-lg text-slate-300">{architectures[activeTab].description}</p>
          </div>

          {/* Component Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectures[activeTab].components.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700 rounded-2xl p-7 hover:bg-slate-600 transition-all duration-300 group border border-slate-600 flex flex-col gap-4"
              >
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {React.createElement(component.icon, { className: 'w-5 h-5 text-slate-300' })}
                  </div>
                  <h4 className="text-lg font-semibold">{component.name}</h4>
                </div>
                <p className="text-slate-300 mb-2 text-sm leading-relaxed">{component.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {component.tech.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-600 text-slate-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: Shield,
              title: "Security First",
              description: "Built-in security at every layer with authentication, authorization, and data encryption"
            },
            {
              icon: Zap,
              title: "High Performance",
              description: "Optimized for speed with caching, CDNs, and efficient algorithms"
            },
            {
              icon: BarChart3,
              title: "Observability",
              description: "Comprehensive monitoring, logging, and analytics for system health"
            },
            {
              icon: Cloud,
              title: "Cloud Native",
              description: "Designed for modern cloud platforms with auto-scaling and resilience"
            }
          ].map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <principle.icon className="w-7 h-7 text-slate-300" />
              </div>
              <h4 className="text-lg font-semibold mb-3">{principle.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureShowcase;