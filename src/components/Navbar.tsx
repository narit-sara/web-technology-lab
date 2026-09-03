import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-zinc-900 border-b border-purple-900/40 justify-center">
      <Link href="/" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">
        หน้าแรก
      </Link>
      <Link href="/courses" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">
        รายวิชา
      </Link>
      <Link href="/about" className="text-gray-300 hover:text-purple-400 font-medium transition-colors">
        เกี่ยวกับ
      </Link>
      <Link href="/bands" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
        วงดนตรี
      </Link>
    </nav>
  );
}