interface ISkills {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    tools: string[];
    security: string[];
    system: string[];
}

export const skills: ISkills = {
    languages: ["C++", "JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    frontend: ["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "RESTful APIs"],
    databases: ["MongoDB", "Mongoose", "PostgreSQL"],
    tools: ["Linux", "Git", "GitHub", "Postman", "Neovim"],
    security: [
        "JWT Authentication",
        "Authorization",
        "Role-Based Access Control",
        "Password Hashing",
        "HTTP Cookies",
    ],
    system: [
        "Concurrency",
        "Multithreading",
        "Thread Pools",
        "Load Balancing",
        "HTTP/1.1",
        "TCP/IP",
        "REST APIs",
        "ACID Transactions",
        "System Design",
    ],
};
