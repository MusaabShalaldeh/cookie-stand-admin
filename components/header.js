import LogoutButton from "./LogoutButton";
import {useAuth} from '../contexts/auth'

export default function Header() {
  const { user } = useAuth();
  return (
    <header className="flex w-full bg-green-500 py-8 px-40">
      <h1 className="text-4xl mx-8 w-11/12 font-bolder-40">Cookie Stand Admin</h1>
      <ul className="inline-flex">
        <li className="mx-2 p-2">
          <button className="bg-green-100 text-center p-1 px-2 text-green-700 rounded-md w-18">
            {user.username}
          </button>
        </li>
        <li className="mx-2 py-2">
          <LogoutButton/>
        </li>
        <li className="mx-2 p-2">
          <button className="bg-gray-50 rounded-md p-1 mx-auto">Overview</button>
        </li>
      </ul>
      
    </header>
  );
}
