import Layout from "@/components/Layout";
import TaskProgress from "@/components/aside/TaskProgress";
import TaskCard from "@/components/task/TaskCard";
import Voice from "@/components/voiceTask/Voice";

export default function page() {
    return (
        <Layout>
            <div className="flex flex-wrap w-[55%] mr-5">
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
            <div className="flex flex-col gap-5 w-[27%]">
                <Voice />
                <TaskProgress
                    title="Completed Tasks"
                    total={100}
                    completed={92}
                    onTime={88}
                    late={18}
                />
            </div>
        </Layout>
    );
}