import { useRouter } from 'next/router';
const router = useRouter();
console.log(router.query);
const clientsPage = () => {
    return (
        <section>
            <div>
                <h1>This is the clients page</h1>
            </div>
        </section>
    )
}

export default clientsPage;