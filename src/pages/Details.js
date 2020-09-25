import Link from 'next/link';

const people = [ 
    {v: 'car', name: 'Jose'},
    {v: 'car', name: 'Juan'},
    {v: 'car', name: 'Pedro'}
]

export default function Details(){
    return <div>
        {/* <Link href="/car/jose">
            <a>Navigate to Jose's Car </a>
        </Link> 
        If I did this, it would be a full page reload, something I don't want.
        Next I will show what next js does */}
        
       {people.map( e => (
           <div>
       <Link as={`/${e.v}/${e.name}`} href='/[vehicle]/[person]'>
           <a>Navigate to {e.name} {e.v}</a>
           </Link>
           </div>
                ))}
        </div>
    {/* //    Here I send the templates using href and in the 'as' parameter and send the path. 
    // in the 'as' parameter I map the path dynamically using input from my people array. 
    // This way of populating the path could also work with information recieved form an API endpoint
    // or something similar.  */}
}