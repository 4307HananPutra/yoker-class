import TextBox from "./TextBox";
export default function Task() {
    return (
        <div className="w-full bg-base-100 shadow-xl h-[80vh]">
            <div className="card-body">
                <h2 className="card-title mb-5 text-4xl">Format Laporan Project Proyek Pemograman</h2>
                <p className="mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <p className="mb-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <h2 className="card-title text-xl">Comment</h2>
                <TextBox />
            </div>
        </div>
    );
}
