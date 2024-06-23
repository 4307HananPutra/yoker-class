import Layout from "@/components/Layout";
import Task from "@/components/Task";
import VoiceFP from "@/components/voiceFinalProject/VoiceFP";

export default function page() {
    return (
        <Layout>
            <div className="w-[65%] mr-5">
                <Task />
            </div>
            <div className="flex flex-col gap-5 w-64">
                <div className="min-w-64 h-44 rounded-md bg-base-100 shadow-xl p-5 gap-3 flex flex-col">
                    <h1 className="text-xl font-medium">Ditugaskan</h1>
                    <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-[250px]" />
                    <button className="bg-base-100 hover:bg-base-200 outline outline-1 w-full h-10 rounded-md">Tandai Sebagai Selesai</button>
                </div>
                <VoiceFP />
                <button className="btn btn-wide bg-base-100 shadow-xl hover:bg-base-200">Kirim</button>
            </div>
        </Layout>
    )
}