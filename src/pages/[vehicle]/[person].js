import { useRouter } from 'next/router';
export default function Person({ownersList}){
    const router = useRouter();
    console.log(router.query);
    return <pre>{ownersList[0].details} </pre>
}

Person.getInitialProps = async (ctx) => {
    const query = ctx.query;
    const response = await fetch('http://localhost:4001/vehicles');
    // Here, I'm taking advantage of the dynamic route and using the dynamic parameter, query.person
    const ownersList = await response.json();
    return {ownersList: ownersList}
}
