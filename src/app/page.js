import Class from "@/components/class/Class";
import TaskProgress from "@/components/aside/TaskProgress";
import Layout from "@/components/Layout";
import TaskModal from "@/components/TaskModal"; // Import the new TaskModal component

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-wrap w-[55%] mr-5">
        <Class />
      </div>
      <div className="flex flex-col gap-5 w-[27%] mt-16">
        <TaskProgress
          title="Completed Tasks"
          total={100}
          completed={92}
          onTime={88}
          late={18}
        />
        <TaskModal />
      </div>
    </Layout>
  );
}
