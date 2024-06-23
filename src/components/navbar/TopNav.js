import Image from "next/image";
import Profile from "../../../public/Profile.svg";
import Notif from "../../../public/Notif.svg";
import Logo from "../../../public/logo.svg";

export default function TopNav() {
    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="flex-1">
                <Image src={Logo} alt="Profile" width={150} height={63} />
            </div>
            <div className="flex-none gap-2">
                <Image src={Notif} alt="Profile" width={35} height={35} className="hover:cursor-pointer mr-5" />
                <div>
                  <p className='text-sm'>PutriKecilAyah</p>
                  <p className='text-xs'>PutriKecil@gmail.com</p>
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <Image src={Profile} alt="Profile" width={63} height={63} />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
}