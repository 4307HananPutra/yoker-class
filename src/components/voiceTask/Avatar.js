import Image from "next/image";
import phone from "../../../public/phone.svg";
import mic from "../../../public/mic.svg";

export default function Avatar () {
    return (
        <div className="avatar flex items-center gap-5 mb-5">
            <div className="w-4 h-6 mr-2">
                <Image src={mic} alt="Profile" width={63} height={63} />
            </div>
            <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p>Dwinawan</p>
            <div className="w-5 h-5 ml-28">
                <Image src={phone} alt="Profile" width={63} height={63} />
            </div>
        </div>
    )
}