import { useRouter } from 'next/router'

const IdPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    // 

    return (
        <div>
            <h1>This is the Square Bracket ID page</h1>
            <p>
                Notice the http://localhost:3000/squarebracketpage/list page still works!!
            </p>
            <p>
                can send request to backend server to fetch piece of data with id router.query.id, will do later
            </p>
        </div>
    )
}

export default IdPage;