import { useRouter } from 'next/router'

const clientsProjectPage = () => {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            <h3>
                This page shows the projects of a given client
            </h3>
            <h3>
                Welcome to the party
            </h3>
        </div>
    )
}

export default clientsProjectPage;