export interface IProjectMetric {
    label: string;
    value: string;
}

export interface IProject {
    id: string;
    title: string;
    subtitle: string;
    category:
        | "Distributed Systems"
        | "Full-Stack"
        | "Low-Level / Networking"
        | "Developer Tools";
    description: string;
    architectureHighlights: string[];
    tags: string[]; // technologies used
    metrics?: IProjectMetric[];
    githubUrl?: string;
    liveUrl?: string;
    inProgress: boolean;
    featured: boolean;
}

export const projectData: IProject[] = [
    {
        id: "http-server-proxy",
        title: "High-Performance HTTP Server & Reverse Proxy",
        subtitle:
            "Multithreaded C++ TCP/IP Server with Round-Robin Load Balancing",
        category: "Low-Level / Networking",
        description:
            "A zero-dependency multithreaded HTTP/1.1 server built in C++ from raw TCP sockets, featuring connection persistence, HTTP request parsing, custom thread pooling, and reverse proxying with Round-Robin load balancing.",
        architectureHighlights: [
            "Socket Programming & HTTP/1.1: Implemented raw TCP socket binding, connection handling, custom HTTP request parsing, routing, and persistent connections.",
            "Custom Thread Pool: Engineered a thread-safe task queue using POSIX synchronization primitives to optimize concurrent request processing under heavy load.",
            "Reverse Proxy & Load Balancer: Built request-forwarding pipelines to relay client traffic to upstream backend servers using Round-Robin distribution[cite: 1].",
            "Benchmarking & Stress Testing: Validated server performance and throughput limits using wrk across 8 threads with 1,000 concurrent client connections[cite: 1].",
        ],
        tags: [
            "C++",
            "TCP/IP",
            "HTTP/1.1",
            "Multithreading",
            "Sockets",
            "wrk",
            "Load Balancing",
        ],
        metrics: [
            { label: "Throughput", value: "35.8K req/sec" },
            { label: "Concurrency", value: "1,000 Connections" },
        ],
        githubUrl: "https://github.com/vt79328/http-server-proxy",
        inProgress: false,
        featured: true,
    },
    {
        id: "flash-sale-platform",
        title: "Flash Sale Platform",
        subtitle: "High-Throughput E-Commerce Engine with Concurrency Control",
        category: "Distributed Systems",
        description:
            "An end-to-end flash sale architecture featuring decoupled administrative sale management, high-throughput product checkout workflows, automated inventory restoration, and ACID-compliant transaction handling.",
        architectureHighlights: [
            "ACID Concurrency Safety: Engineered MongoDB multi-document transactions with Mongoose sessions to eliminate double-spending and guarantee stock consistency during high contention[cite: 1].",
            "Custom Retry Queue: Implemented a resilience queue to intercept and retry TransientTransactionError write conflicts seamlessly under peak load[cite: 1].",
            "Automated Lifecycle Enforcement: Designed strict single-active-sale constraints per product and atomic inventory restoration upon order/sale cancellation[cite: 1].",
            "Load & Race Condition Validation: Benchmarked system limits with k6 across 99 virtual users (VUs), proving 100% inventory accuracy with zero race conditions[cite: 1].",
        ],
        tags: [
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "React",
            "JWT",
            "k6",
        ],
        metrics: [
            { label: "Inventory Accuracy", value: "100% (0 Races)" },
            { label: "Stress Test", value: "99 Simultaneous VUs" },
        ],
        githubUrl: "https://github.com/vt79328/flash-sale-platform",
        inProgress: true,
        featured: true,
    },
    {
        id: "task-exe",
        title: "Task.exe",
        subtitle: "Full-Stack Productivity & Task Management Application",
        category: "Full-Stack",
        description:
            "A full-stack task management application inspired by modern productivity tools, featuring authenticated task management, priorities, deadlines, notes, and threaded comments through a responsive dashboard interface.",
        architectureHighlights: [
            "Authentication & Authorization: Implemented JWT-based authentication with HTTP cookies to securely manage authenticated user sessions.",
            "Task Management: Built complete task workflows for creating, updating, completing, and deleting tasks with support for priorities, notes, and deadlines.",
            "Comments System: Implemented task-level comment CRUD with edited-state tracking and timestamps for a more realistic collaborative workflow.",
            "Full-Stack Architecture: Structured the application with a React + TypeScript frontend, Express + TypeScript backend, and MongoDB persistence layer.",
        ],
        tags: [
            "TypeScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
        ],
        githubUrl: "...",
        inProgress: true,
        featured: false,
    },
    {
        id: "expense-tracker",
        title: "Expense Tracker",
        subtitle: "Full-Stack Personal Expense Management Application",
        category: "Full-Stack",
        description:
            "A full-stack expense tracking application for managing personal financial transactions with authenticated user accounts and persistent expense data.",
        architectureHighlights: [
            "Authentication & Session Management: Implemented user registration and login with JWT-based authentication stored in HTTP cookies.",
            "Expense Management: Built CRUD workflows for creating, viewing, updating, and deleting expense records.",
            "User Data Isolation: Associated expense records with authenticated users so each account manages its own financial data.",
        ],
        tags: [
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
        ],
        githubUrl: "...",
        inProgress: false,
        featured: false,
    },
    {
        id: "job-tracker",
        title: "Job Tracker",
        subtitle: "Full-Stack Job Application Tracking Application",
        category: "Full-Stack",
        description:
            "A full-stack job application tracker that helps users record job opportunities, manage their application progress, and filter applications by their current status.",
        architectureHighlights: [
            "Authentication & Session Management: Implemented user registration and login with JWT-based authentication stored in HTTP cookies.",
            "Job Application Management: Built workflows for adding and retrieving job applications along with relevant company and job details.",
            "Application Status Tracking: Added status management for tracking applications through Applied, Interview, Selected, and Rejected stages.",
            "Status-Based Filtering: Implemented job listing filters that allow users to view applications based on their current status.",
        ],
        tags: [
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
        ],
        githubUrl: "...",
        inProgress: false,
        featured: false,
    },
];
