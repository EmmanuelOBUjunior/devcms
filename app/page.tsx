import Link from "next/link";

export default function Home() {
  console.log("What am I doing here?")
  return (
    <main>
      <h1 className="text-3xl">Welcome to nextjs</h1>
      <p>This is the list of users:</p>
      <ul>
        <li><Link href={`/userprofile/1`}>This is for user 01</Link></li>
      </ul>
    </main>
  );
}
