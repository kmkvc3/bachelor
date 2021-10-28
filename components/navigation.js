import Link from "next/link";

export default function Layout({ children }) {
  return (
    <nav>
      <ul>
        <Link href="/search">
          <a>Search</a>
        </Link>
        <Link href="/browse">
          <a>Browse</a>
        </Link>
        <Link href="/blast">
          <a>Blast</a>
        </Link>
      </ul>
    </nav>
  );
}
