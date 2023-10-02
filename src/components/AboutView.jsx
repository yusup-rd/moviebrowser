import Hero from "./Hero";

const AboutView = () => {
    return (
        <div>
            <Hero text="About Me" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2  my-5">
                        <h3>
                            Hello! My name is Yusup Rejebov, and I'm thrilled to
                            have you visit this website. Let me take a moment to
                            introduce myself.
                        </h3>
                        <p className="lead">
                            I'm a student based in Malaysia, and I have a deep
                            passion for coding.
                        </p>
                        <p className="lead">
                            This website serves as a platform for me to share my
                            experiences from working with React.
                        </p>
                        <p className="lead">
                            Thank you for stopping by. Wishing you an inspiring
                            journey ahead!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutView;
