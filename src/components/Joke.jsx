import React, { useState, useEffect } from "react";

// Call Joke API
// https://sv443.net/jokeapi/v2/#try-it
// const JOKES = [
//     {
//         setup: "What do you call when 8 mosquitos bite you?",
//         punchline: "A mosquito byte.",
//     },
//     {
//         setup: null,
//         punchline: "I told my computer I needed a break... and it froze.",
//     },
//     { setup: null, punchline: "!false (It’s funny because it’s true.)" },
//     { setup: "How did the first program die?", punchline: "It was executed." },
//     { setup: "How do robots eat pizza?", punchline: "One byte at a time." },
//     { setup: null, punchline: "Error 404: joke not found" },
// ];

const JokeGenerator = () => {
    const [joke, setJoke] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch a random joke when the component mounts
        // fetch(
        //     "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
        // )
        fetch("https://v2.jokeapi.dev/joke/Dark")
            .then((response) => response.json())
            .then((data) => {
                setJoke(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching joke:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading joke...</div>;
    }

    return (
        <div className="joke-container">
            {joke && (
                <>
                    {joke.type === "twopart" && (
                        <>
                            <div className="joke-setup">{joke.setup}</div>
                            <div className="joke-punchline">
                                {joke.delivery}
                            </div>
                        </>
                    )}
                    {joke.type === "single" && (
                        <div className="joke">{joke.joke}</div>
                    )}
                </>
            )}
        </div>
    );
};

export default JokeGenerator;
