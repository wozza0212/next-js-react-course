import Link from "next/link";
const clientsPage = () => {
    return (
        <section>
            <div>
                <h1>This is the clients page</h1>
            </div>
            <div>
                <h3>Clients</h3>
                <ul>
                    <li>
                        <Link href='/clients/jim'>Jim</Link>
                    </li>
                    <li>
                        <Link href='/clients/max'>Max</Link>
                    </li>

                </ul>
            </div>
        </section>
    )
}

export default clientsPage;