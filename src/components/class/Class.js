import Card from "./Card";

export default function Class() {
    return (
        <div className="flex flex-col">
            <div className="flex gap-5 mb-5">
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Pilih Kelas</option>
                    <option>Pemrog Web</option>
                    <option>......</option>
                </select>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
            <div className="flex flex-wrap gap-5">
                <Card dosen={"Abd mizwar A. Rahim"} matkul={"Pemrog Web"}/>
                <Card dosen={"Abd mizwar A. Rahim"} matkul={"Pemrog Web"}/>
                <Card dosen={"Abd mizwar A. Rahim"} matkul={"Pemrog Web"}/>
                <Card dosen={"Abd mizwar A. Rahim"} matkul={"Pemrog Web"}/>
            </div>
        </div>
    );
}