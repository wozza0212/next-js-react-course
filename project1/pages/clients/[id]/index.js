import { useRouter } from 'next/router'
import Link from 'next/link';

const clientsProjectPage = () => {
    const router = useRouter();
    console.log(router.query);
    const clientName = router.query.id;
    const projectShark = `/clients/${clientName}/shark`;
    const projectDolphin = `/clients/${clientName}/dolphin`;
    return (
        <div>
            <h3>
                This page shows the projects of a given client
            </h3>
            <h3>
                Welcome to the business {clientName}
            </h3>
            <div>
                <h3>Your projects</h3>
                <ul>
                    <li>
                        <Link href={projectShark}>Shark</Link>
                    </li>
                    <li>
                        <Link href={projectDolphin}>Dolphin</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default clientsProjectPage;