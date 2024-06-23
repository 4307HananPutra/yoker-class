// components/TaskProgress.js
const TaskProgress = ({ title, total, completed, onTime, late }) => {
    const totalProgress = (completed / total) * 100;
    const onTimeProgress = (onTime / total) * 100;
    const lateProgress = (late / total) * 100;

    return (
        <div className="border rounded-lg shadow-lg p-4 w-full max-w-md h-64 bg-base-100">
            <h2 className="text-lg font-semibold mb-5">{title}</h2>
            <div className="mb-5">
                <span className="block mb-1">Total Tasks Completed: {completed} of {total}</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${totalProgress}%` }}></div>
                </div>
            </div>
            <div className="mb-5">
                <span className="block mb-1">Tasks On-time: {onTime} of {total}</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${onTimeProgress}%` }}></div>
                </div>
            </div>
            <div>
                <span className="block mb-1">Tasks Late: {late} of {total}</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${lateProgress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default TaskProgress;
