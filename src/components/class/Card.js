import Link from "next/link";

export default function Card({dosen, matkul}) {
    return (
        <Link href={'/task'}>
            <div className="card w-[400px] bg-base-100 shadow-xl hover:cursor-pointer">
                <div className="card-body flex-row gap-10">
                    <div className="flex flex-col gap-3">    
                        <h5 className="text-base font-semibold">{dosen}</h5>
                        <h3 className="text-3xl font-semibold">{matkul}</h3>
                        <p className="font-light">100 Mahasiswa Bergabung</p>
                    </div>
                    <div className="avatar">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
