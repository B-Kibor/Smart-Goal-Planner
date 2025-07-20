import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState("");
  const [goalId, setGoalId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const goal = goals.find((g) => g.id === goalId);
    if (!goal) return;

    const updatedGoal = {
      ...goal,
      savedAmount: Number(goal.savedAmount) + Number(amount),
    };

    onDeposit(updatedGoal);
    setAmount("");
    setGoalId("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6">
      <h2 className="text-xl font-semibold mb-4">Make a Deposit</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <select
          value={goalId}
          onChange={(e) => setGoalId(e.target.value)}
          className="border p-2 rounded flex-1"
          required
        >
          <option value="">Select Goal</option>
          {goals.map((goal) => (
            <option key={goal.id} value={goal.id}>
              {goal.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded flex-1"
          placeholder="Amount"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Deposit
        </button>
      </div>
    </form>
  );
}

export default DepositForm;
