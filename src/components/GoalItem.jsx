import React from "react";

function GoalItem({ goal, onDeleteGoal, onUpdateGoal, onDeposit }) {
  return (
    <div className="border p-4 rounded shadow flex justify-between items-center">
      <div>
        <h3 className="font-bold">{goal.name}</h3>
        <p>
          Saved: <strong>KES {goal.savedAmount}</strong> /{" "}
          <strong>KES {goal.targetAmount}</strong>
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onDeposit(goal)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Deposit
        </button>
        <button
          onClick={() => onUpdateGoal(goal)}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDeleteGoal(goal.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default GoalItem;

