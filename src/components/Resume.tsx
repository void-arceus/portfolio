function Resume() {
    return (
        <main className="w-full h-screen max-w-5xl mx-auto p-2 flex flex-col items-start justify-start gap-4 pt-16 font-monospace">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-xs sm:text-sm text-(--text) font-bold text-shadow-sm/10">
                    $ cat /Documents/Vinay_Resume.pdf
                </h1>
                <a
                    href="/Vinay_Resume.pdf"
                    download
                    className="text-xs sm:text-sm font-bold text-(--text) text-shadow-sm/10 hover:cursor-pointer hover:text-(--text-muted)"
                >
                    $ download Vinay_Resume.pdf
                </a>
            </div>
            <div className="flex-1 w-full min-h-0 overflow-auto">
                <iframe
                    src="/Vinay_Resume.pdf"
                    title="Resume"
                    className="border h-full w-full rounded-xl border-(--border)"
                />
            </div>
        </main>
    );
}

export default Resume;
