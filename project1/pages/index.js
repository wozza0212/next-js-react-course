import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <div>
                <ul>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/clients'>Clients</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link href='/squarebracketpage'>Square bracket pages</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;