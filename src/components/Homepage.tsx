import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import Contact from "./Contact";
import Background from "./Background";

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
        <main className="grid-bg-container relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* background */}
            <div className="absolute z-0 h-screen w-full overflow-hidden">
                <Background />
            </div>

            <div className="z-10 relative w-full max-w-5xl h-full flex items-center justify-center">
                {handleShowComponent()}
            </div>
        </main>
    );
}

export default Homepage;
