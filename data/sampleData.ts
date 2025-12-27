export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  pricing: string;
  bestFor: string;
  stackFit: string;
  pros: string[];
  cons: string[];
  website?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  whyItMatters: string;
}

export interface Thread {
  id: string;
  title: string;
  author: string;
  replies: number;
  reactions: number;
  acceptedAnswer?: boolean;
  summary?: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  tags: string[];
  usedIn: number;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  readTime: string;
  date: string;
  excerpt: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  salary?: string;
  verified: boolean;
  tags: string[];
}

export const tools: Tool[] = [
  {
    id: "1",
    name: "AgentFlow",
    description: "Orchestration framework for multi-agent systems with built-in state management",
    category: "Orchestration",
    tags: ["Orchestration", "Multi-Agent", "State"],
    pricing: "Open Source",
    bestFor: "Complex multi-agent workflows",
    stackFit: "Works with any LLM",
    pros: ["Lightweight", "Type-safe", "Great docs"],
    cons: ["Newer project", "Smaller community"],
    website: "https://agentflow.dev",
  },
  {
    id: "2",
    name: "GuardrailKit",
    description: "Policy engine and safety guardrails for production AI agents",
    category: "Safety",
    tags: ["Safety", "Policy", "Production"],
    pricing: "Free tier + Pro $99/mo",
    bestFor: "Production deployments",
    stackFit: "Integrates with major frameworks",
    pros: ["Enterprise-ready", "Comprehensive", "Active support"],
    cons: ["Can be complex", "Pricing scales"],
    website: "https://guardrailit.com",
  },
  {
    id: "3",
    name: "EvalBench",
    description: "Comprehensive evaluation suite for AI systems",
    category: "Evaluation",
    tags: ["Evaluation", "Testing", "Metrics"],
    pricing: "Open Source",
    bestFor: "Agent testing & validation",
    stackFit: "Framework agnostic",
    pros: ["Extensive test suite", "Customizable", "Well-maintained"],
    cons: ["Setup complexity", "Resource intensive"],
    website: "https://evalbench.ai",
  },
  {
    id: "4",
    name: "PromptVault",
    description: "Version-controlled prompt templates and management system",
    category: "Prompts",
    tags: ["Prompts", "Templates", "Versioning"],
    pricing: "Free + Team $49/mo",
    bestFor: "Prompt engineering teams",
    stackFit: "Universal",
    pros: ["Easy to use", "Great collaboration", "Versioning"],
    cons: ["Limited integrations", "New features"],
    website: "https://promptvault.io",
  },
  {
    id: "5",
    name: "TraceWatch",
    description: "Observability and monitoring for AI agent systems",
    category: "Observability",
    tags: ["Observability", "Monitoring", "Debugging"],
    pricing: "Free tier + Pro $79/mo",
    bestFor: "Production monitoring",
    stackFit: "Works with all frameworks",
    pros: ["Real-time insights", "Great UX", "Alerting"],
    cons: ["Can be expensive", "Learning curve"],
    website: "https://tracewatch.ai",
  },
  {
    id: "6",
    name: "ToolSmith",
    description: "Tool calling framework with automatic schema generation",
    category: "Tools",
    tags: ["Tool Calling", "Schema", "Integration"],
    pricing: "Open Source",
    bestFor: "Tool-heavy agents",
    stackFit: "LLM-agnostic",
    pros: ["Type-safe", "Auto-generation", "Fast"],
    cons: ["Limited language support", "Docs improving"],
    website: "https://toolsmith.dev",
  },
  {
    id: "7",
    name: "MemoryGraph",
    description: "Graph-based memory system for long-context agent conversations",
    category: "Memory",
    tags: ["Memory", "Graph", "Context"],
    pricing: "Open Source",
    bestFor: "Long-running agents",
    stackFit: "Framework independent",
    pros: ["Scalable", "Efficient", "Flexible"],
    cons: ["Complex setup", "Resource needs"],
    website: "https://memorygraph.ai",
  },
  {
    id: "8",
    name: "DataDock",
    description: "Universal connector framework for data sources and APIs",
    category: "Connectors",
    tags: ["Connectors", "Data", "APIs"],
    pricing: "Free + Enterprise",
    bestFor: "Data integration",
    stackFit: "Universal",
    pros: ["Many connectors", "Reliable", "Well-documented"],
    cons: ["Some connectors basic", "Enterprise pricing"],
    website: "https://datadock.io",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "New Framework Release: AgentFlow v2.0",
    summary: "AgentFlow introduces native support for streaming and improved error handling.",
    date: "2024-03-15",
    tag: "Frameworks",
    whyItMatters: "Streaming support is critical for real-time agent interactions.",
  },
  {
    id: "2",
    title: "GuardrailKit Adds Policy Templates",
    summary: "Pre-built policy templates for common safety scenarios now available.",
    date: "2024-03-12",
    tag: "Safety",
    whyItMatters: "Reduces time to production for teams implementing safety measures.",
  },
  {
    id: "3",
    title: "EvalBench Benchmark Results Published",
    summary: "Comprehensive evaluation of top 10 agent frameworks across 50+ scenarios.",
    date: "2024-03-10",
    tag: "Evals",
    whyItMatters: "Helps teams make informed framework choices based on real performance data.",
  },
  {
    id: "4",
    title: "TraceWatch Launches Free Tier",
    summary: "Free observability tier now includes up to 100K traces per month.",
    date: "2024-03-08",
    tag: "Observability",
    whyItMatters: "Makes production monitoring accessible to smaller teams and projects.",
  },
  {
    id: "5",
    title: "Major Deployment: Enterprise Agent System",
    summary: "Fortune 500 company deploys 10,000+ agents using GuardrailKit and TraceWatch.",
    date: "2024-03-05",
    tag: "Deployments",
    whyItMatters: "Validates production readiness of modern agent tooling at scale.",
  },
  {
    id: "6",
    title: "ToolSmith Integrates with LangChain",
    summary: "Native integration brings type-safe tool calling to LangChain workflows.",
    date: "2024-03-01",
    tag: "Frameworks",
    whyItMatters: "Bridges the gap between type safety and popular frameworks.",
  },
];

export const threads: Thread[] = [
  {
    id: "1",
    title: "What guardrails are mandatory before production?",
    author: "sarah_builder",
    replies: 12,
    reactions: 45,
    acceptedAnswer: true,
    summary: "Consensus: Input validation, output filtering, rate limiting, and audit logging are essential. Many recommend GuardrailKit for quick setup.",
  },
  {
    id: "2",
    title: "Best practices for agent evaluation?",
    author: "alex_dev",
    replies: 8,
    reactions: 23,
  },
  {
    id: "3",
    title: "How to handle tool calling errors gracefully?",
    author: "maya_ai",
    replies: 15,
    reactions: 38,
  },
];

export const templates: Template[] = [
  {
    id: "1",
    title: "Tool-calling guardrails",
    description: "Comprehensive guardrail pattern for tool-calling agents",
    code: `function validateToolCall(tool: Tool, params: any): ValidationResult {
  // Input validation
  if (!tool.schema.validate(params)) {
    return { valid: false, error: "Invalid parameters" };
  }
  
  // Rate limiting
  if (rateLimiter.isExceeded(tool.name)) {
    return { valid: false, error: "Rate limit exceeded" };
  }
  
  // Safety checks
  if (safetyChecker.isUnsafe(tool, params)) {
    return { valid: false, error: "Unsafe operation" };
  }
  
  return { valid: true };
}`,
    language: "typescript",
    tags: ["Safety", "Tool Calling", "Validation"],
    usedIn: 12,
  },
  {
    id: "2",
    title: "Evaluation harness skeleton",
    description: "Basic structure for agent evaluation tests",
    code: `describe("Agent Evaluation", () => {
  const testCases = [
    { input: "...", expected: "..." },
  ];
  
  testCases.forEach(({ input, expected }) => {
    test(\`handles: \${input}\`, async () => {
      const result = await agent.run(input);
      expect(result).toMatch(expected);
    });
  });
});`,
    language: "typescript",
    tags: ["Testing", "Evaluation", "Framework"],
    usedIn: 8,
  },
  {
    id: "3",
    title: "Memory pattern",
    description: "Graph-based memory implementation pattern",
    code: `class AgentMemory {
  private graph: MemoryGraph;
  
  async store(context: Context): Promise<void> {
    const node = this.graph.createNode(context);
    await this.graph.connect(node, this.getRelevantNodes(context));
  }
  
  async retrieve(query: string): Promise<Context[]> {
    return this.graph.search(query, { limit: 5 });
  }
}`,
    language: "typescript",
    tags: ["Memory", "Graph", "Pattern"],
    usedIn: 15,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Production-Ready AI Systems",
    author: "Alex Chen",
    readTime: "8 min",
    date: "2024-03-10",
    excerpt: "A comprehensive guide to deploying AI systems in production environments...",
  },
  {
    id: "2",
    title: "The State of Agent Evaluation in 2024",
    author: "Sarah Kim",
    readTime: "12 min",
    date: "2024-03-05",
    excerpt: "Exploring current evaluation methodologies and emerging best practices...",
  },
  {
    id: "3",
    title: "Tool Calling Patterns That Scale",
    author: "Maya Patel",
    readTime: "6 min",
    date: "2024-03-01",
    excerpt: "Practical patterns for implementing robust tool calling in agent systems...",
  },
];

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Agent Engineer",
    company: "AI Innovations",
    location: "San Francisco, CA",
    remote: true,
    salary: "$180k - $220k",
    verified: true,
    tags: ["Agents", "Python", "LLMs"],
  },
  {
    id: "2",
    title: "Agent Safety Lead",
    company: "SecureAI",
    location: "Remote",
    remote: true,
    salary: "$160k - $200k",
    verified: true,
    tags: ["Safety", "Policy", "Research"],
  },
  {
    id: "3",
    title: "Agent Evaluation Engineer",
    company: "TestAI",
    location: "New York, NY",
    remote: false,
    salary: "$140k - $180k",
    verified: false,
    tags: ["Evaluation", "Testing", "Metrics"],
  },
];

