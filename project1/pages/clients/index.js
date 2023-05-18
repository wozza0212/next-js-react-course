import Link from "next/link";



const clientsPage = () => {

    const clientsDB = [
        {id:'bill', name:'Billy'},
        {id:'will', name:'Willy'},
        {id:'Dill', name:'Dilly'},
    ]
    
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
                    {clientsDB.map((client) => 
                        ( //using brackets replaces using curly braces and return
                        <li key={client.name}>
                            <Link href={`/clients/${client.id}`}>{client.name}</Link>
                        </li>
                        )
                    )}

                </ul>
            </div>
        </section>
    )
}

export default clientsPage;