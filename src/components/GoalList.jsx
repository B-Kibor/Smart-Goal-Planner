import React from "react";

function GoalList({ goals, onDelete, onUpdate }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Goals</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {goals.map((goal) => {
          const progress = (goal.savedAmount / goal.targetAmount) * 100;

          return (
            <div
              key={goal.id}
              className="p-4 bg-gray-100 rounded shadow space-y-2"
            >
              <h3 className="text-lg font-semibold">{goal.name}</h3>
              <p className="text-sm">Category: {goal.category}</p>
              <p>
                Saved: ${goal.savedAmount} / ${goal.targetAmount}
              </p>
              <div className="w-full bg-gray-300 rounded h-3">
                <div
                  className="bg-blue-600 h-3 rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <button
                onClick={() => onDelete(goal.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GoalList;

