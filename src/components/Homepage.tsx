import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import Contact from "./Contact";

interface HomePageProps {
    menu: string;
}

function Homepage({ menu }: HomePageProps) {
    function handleShowComponent() {
        switch (menu) {
            case "hero":
                return <Hero />;
            case "projects":
                return <Projects />;
            case "skills":
                return <Skills />;
            case "contact":
                return <Contact />;
            case "resume":
                return <Resume />;
            default:
                return <Hero />;
        }
    }

    return (
        <main className="relative overflow-hidden h-screen w-full flex items-center justify-center">
            {/* Ambient background */}

            {/* Page content */}
            <div className="relative z-10">{handleShowComponent()}</div>
        </main>
    );
}

export default Homepage;
