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
        featured: true,
    },
];
