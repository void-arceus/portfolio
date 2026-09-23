function Contact() {
    return (
        <main className="relative w-full h-screen max-w-5xl mx-auto p-2 flex flex-col items-start justify-start gap-6 pt-16">
            <div className="w-full flex flex-col items-start justify-center gap-4 pt-4">
                <div className="w-full flex flex-col items-start justify-center">
                    <span className="text-sm font-semibold text-(--text) text-shadow-sm/10">
                        $ whoami
                    </span>
                    <h1 className="text-lg font-semibold text-(--text) text-shadow-sm/10">
                        Full Stack Developer | Backend Developer
                    </h1>
                </div>
                <div className="w-full flex flex-col items-start justify-center gap-2">
                    <span className="text-sm font-semibold text-(--text) text-shadow-sm/10">
                        $ cat Documents/about_me.txt
                    </span>
                    <p className="text-md font-medium text-(--text-muted) text-shadow-sm/10">
                        Vinay is someone who enjoys quiet places, old music,
                        coffee, and spending hours understanding how things
                        work. He likes building things from scratch, breaking
                        them apart, and learning what happens underneath the
                        abstractions.
                    </p>
                    <p className="text-md font-medium text-(--text-muted) text-shadow-sm/10">
                        He enjoys being alone sometimes - just him, his
                        thoughts, and his code. He finds a strange kind of peace
                        in getting deeply invested in a problem, spending hours
                        understanding it, experimenting with it, and eventually
                        making it work.
                    </p>
                    <p className="text-md font-medium text-(--text-muted) text-shadow-sm/10">
                        For him, coding is less about just making things work
                        and more about understanding why they work.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-4">
                <div className="w-full flex flex-col items-start justify-start gap-0">
                    <span className="text-sm font-semibold text-(--text) text-shadow-sm/10">
                        $ cat email.txt
                    </span>
                    <p className="text-md text-(--text-muted) font-medium text-shadow-sm/10">
                        vt79328@gmail.com
                    </p>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-0">
                    <span className="text-sm font-semibold text-(--text) text-shadow-sm/10">
                        $ cat linkedin.txt
                    </span>
                    <a
                        href="https://www.linkedin.com/in/vinay-thakur-3550a4285/"
                        target="_blank"
                        className="text-md text-(--text-muted) font-medium text-shadow-sm/10 underline hover:text-(--text)"
                    >
                        linkedin.com/vinay
                    </a>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-0">
                    <span className="text-sm font-semibold text-(--text) text-shadow-sm/10">
                        $ cat github.txt
                    </span>
                    <a
                        href="https://github.com/void-arceus"
                        target="_blank"
                        className="text-md text-(--text-muted) font-medium text-shadow-sm/10 underline"
                    >
                        github.com/void-arceus
                    </a>
                </div>
            </div>
            <div className="absolute font-monospace bottom-2 right-2">
                <p className="text-xs opacity-10 select-none text-(--text-muted)">
                    not everything needs to be said out loud
                </p>
            </div>
        </main>
    );
}

export default Contact;
