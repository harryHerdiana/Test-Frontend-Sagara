import Link from "next/link";
import Image from "next/image";
import Logo from "../media/sagara-logo.png";
function MainHeader() {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white p-2">
      <div className="items-center pt-2">
          <Image src={Logo} />
      </div>
      <nav className="flex">
        <ul>
          <li className="mr-8">
            <Link href="/login">Login</Link>
          </li>
        </ul>
        <ul>
          <li className="mr-8">
            <Link href="/register">Register</Link>
          </li>
        </ul>
        <ul>
          <li className="mr-8">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
