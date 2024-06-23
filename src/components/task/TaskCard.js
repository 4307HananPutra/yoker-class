import Link from "next/link";

export default function TaskCard() {
    return (
        <Link href={'/task/final-project'}>
            <div className="card w-full bg-base-100 shadow-xl h-44 hover:cursor-pointer">
                <div className="card-body">
                    <h2 className="card-title mb-5 text-3xl">Format Laporan Final Projek</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
        </Link>
    );
}