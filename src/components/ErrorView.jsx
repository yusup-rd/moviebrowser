import Hero from "./Hero";

const ErrorView = () => {
    return (
        <>
            <Hero text="Error 404. Page not found." />
            <p className="lead m-5">Oops! It seems like this page doesn't exist...</p>
        </>
    );
};

export default ErrorView;
