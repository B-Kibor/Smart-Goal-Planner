import React, { useState, useEffect } from "react";
import GoalForm from "./components/GoalForm.jsx";
import GoalList from "./components/GoalList.jsx";
import DepositForm from "./components/DepositForm.jsx";
import Overview from "./components/Overview.jsx";
import Chart from "./components/Chart.jsx";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Fetch goals error:", err));
  }, []);

  const addGoal = (newGoal) => {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((goal) => setGoals([...goals, goal]))
      .catch((err) => console.error("Add goal error:", err));
  };

  const updateGoal = (updatedGoal) => {
    fetch(`http://localhost:3000/goals/${updatedGoal.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGoal),
    })
      .then((res) => res.json())
      .then((data) => {
        const updated = goals.map((g) => (g.id === data.id ? data : g));
        setGoals(updated);
      })
      .catch((err) => console.error("Update goal error:", err));
  };

  const deleteGoal = (id) => {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE",
    })
      .then(() => setGoals(goals.filter((goal) => goal.id !== id)))
      .catch((err) => console.error("Delete goal error:", err));
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <Overview goals={goals} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <GoalList
        goals={goals}
        onDeleteGoal={deleteGoal}
        onUpdateGoal={updateGoal}
      />
      <Chart goals={goals} />
    </div>
  );
}

export default App;
