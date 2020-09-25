export function HomePage(){
    return <h1> Hello </h1>
}

// This exists on the conatainer folder because
// I want to make sure that the Pages folder only deals with routing and nothing else.
// In the container folder I can add any type of files (for example)
// files with helper functions and I will not have the problem that next js
// creates a route consisting os the said files.