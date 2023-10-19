import Link from "next/link";
const Header = () => (
    <header>
        <nav>
            <Link href="/Buenos Aires">Buenos Aires</Link>
            <Link href="/New York">New York</Link>
            <Link href="/Seoul">Seoul</Link>
            <Link href="/Kyoto">Kyoto</Link>
            <Link href="/Paris">Paris</Link>
        </nav>
    </header>
);

export default Header;