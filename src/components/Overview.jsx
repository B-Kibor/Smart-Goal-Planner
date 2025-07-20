import React, { useEffect } from "react";

function Overview({ goals }) {
  const totalGoals = goals.length;

  const totalSaved = goals.reduce(
    (sum, goal) => sum + (Number(goal.savedAmount) || 0),
    0
  );

  const completedGoals = goals.filter(
    (goal) => Number(goal.savedAmount) >= Number(goal.targetAmount)
  ).length;

  const getStatusMessage = (goal) => {
    const today = new Date();
    const deadline = new Date(goal.deadline);
    const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));

    if (Number(goal.savedAmount) >= Number(goal.targetAmount)) return "Completed";
    if (today > deadline) return "Overdue";
    if (daysLeft <= 3) return `${daysLeft} days left`;
    return `${daysLeft} days remaining`;
  };

  useEffect(() => {
    const today = new Date();
    const nearDeadlines = goals.filter((goal) => {
      const deadline = new Date(goal.deadline);
      const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
      return daysLeft <= 3 && Number(goal.savedAmount) < Number(goal.targetAmount);
    });

    if (nearDeadlines.length > 0) {
      alert("Reminder: Some of your goals are nearing their deadline!");
    }
  }, [goals]);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>

      <div className="grid md:grid-cols-3 gap-4 text-center">
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Goals</h3>
          <p className="text-2xl">{totalGoals}</p>
        </div>

        <div className="bg-green-100 dark:bg-green-900 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Saved</h3>
          <p className="text-2xl">${totalSaved.toLocaleString()}</p>
        </div>

        <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Goals Completed</h3>
          <p className="text-2xl">{completedGoals}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">Goal Deadlines</h3>
      <ul className="space-y-2">
        {goals.map((goal) => (
          <li key={goal.id} className="flex justify-between border-b py-2">
            <span className="font-medium">{goal.name}</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {getStatusMessage(goal)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;


