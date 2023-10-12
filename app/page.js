import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/search" className="border rounded px-3 py-2">
        Search
      </Link>
    </main>
  );
}
