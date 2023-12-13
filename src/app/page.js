import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="container">
        <button type="button" className="mt-4">
          <Link
            href="/register"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Register
          </Link>
        </button>
      </div>
    </div>
  );
}
