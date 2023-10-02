import Hero from "./Hero";

const HomeView = () => {
    return (
        <div>
            <Hero text="Welcome to React 201" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <h3>Start Browsing Movies in a Search Bar</h3>
                        <p className="lead">
                            Open the search bar and start typing the movie name.
                            After you find the movie you were looking for you
                            can check its details.
                        </p>
                        <br/>
                        <h3>
                            What I've Learned from Creating a Movie Search React
                            Project with API Integration
                        </h3>
                        <p className="lead">
                            Creating a React project for movie searching with
                            API integration has been an enlightening experience,
                            allowing me to gain valuable insights into various
                            aspects of web development. Here's a summary of the
                            knowledge and skills I've acquired during this
                            project:
                        </p>
                        <ol className="lead">
                            <li>
                                <strong>React Proficiency: </strong>Through this
                                project, I've honed my understanding of React,
                                delving into components, JSX syntax, state
                                management, and props. React's fundamental
                                concepts have become second nature, enabling me
                                to build dynamic and responsive user interfaces
                                effectively.
                            </li>
                            <li>
                                <strong>API Interaction: </strong>A significant
                                part of this endeavor involved mastering
                                asynchronous requests to external APIs using
                                tools like 'fetch'. This newfound ability is
                                crucial for seamlessly fetching and displaying
                                movie information from remote sources.
                            </li>
                            <li>
                                <strong>
                                    Component Lifecycle Understanding:{" "}
                                </strong>
                                Learning how to work with React's component
                                lifecycle or React Hooks like useEffect was
                                essential for managing side effects, such as
                                making API requests efficiently.
                            </li>
                            <li>
                                <strong>Search Functionality Expertise:</strong>
                                Developing a movie search feature required
                                adeptness in handling user input, orchestrating
                                API calls, and dynamically rendering search
                                results. Skills in form elements, event
                                handling, and conditional rendering were honed.
                            </li>
                            <li>
                                <strong>Deployment Know-How: </strong>Learning
                                to deploy a React application to hosting
                                platforms like Netlify, Vercel, or GitHub Pages
                                has equipped me with practical deployment
                                skills.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeView;
