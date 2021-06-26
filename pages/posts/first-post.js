import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <div className="first-post">
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/Purnkleen.png"
        height={144}
        width={144}
        alt="Pure and clean"
      />
    </div>
  )
}