import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/post/1">
        <a>Go to /post/1</a>
      </Link>
    </div>
  );
}
