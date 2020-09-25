import Link from 'next/link';

 /*
Initially I used this array to feed my dynamic routes 
const owners = [ 
    {v: 'car', name: 'Jose'},
    {v: 'car', name: 'Juan'},
    {v: 'car', name: 'Pedro'}
]
*/

// I can use SWR to make this snippet mush simpler.. what?
export default function List({ownersList}){
    /* <Link href="/car/jose">
            <a>Navigate to Jose's Car </a>
        </Link> 
        If I did this, it would be a full page reload, something I don't want,
        I will show what next js does */

    return (
        <div>
            {ownersList.map((e, index) => (
            <div key={index}>
                <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
                <a>
                    Navigate to {e.ownerName}'s {e.vehicle}
                </a>
                </Link>
            </div>
            ))}
        </div>
        );
}
/*   Here I send the templates using href and in the 'as' parameter and send the path. 
     in the 'as' parameter I map the path dynamically using input from my people array. 
     This way of populating the path could also work with information recieved form an API endpoint
     or something similar.  */

List.getInitialProps = async () => {
    const response = await fetch('http://localhost:4001/vehicles');
    // Using a mock server. Ran npm install -g json-server 
    // json-server --watch db.json --port 4001 to start the server
    const ownersList = await response.json();
    return {ownersList: ownersList}
  }

/*
Since this is an async function, nextjs checks that I have getInitialProps,
it checks that there is a promise, waits for the promise to be resolved and 
when the promise is resolved it takes whatever is returned and passes it as properties to the component,
the component renders once, next js picks the html and sends it to the client.

The way to check that the things are server side rendered is to verify that in the network,
on the preview there is already the information I want to show to the client.

*/

