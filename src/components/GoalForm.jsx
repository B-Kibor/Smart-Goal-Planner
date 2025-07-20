import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    category: "",
    deadline: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      ...formData,
      name: formData.name.trim(),
      category: formData.category.trim(),
      id: crypto.randomUUID(),
      targetAmount: Math.abs(parseFloat(formData.targetAmount)),
      savedAmount: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    onAddGoal(newGoal);
    setFormData({ name: "", targetAmount: "", category: "", deadline: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Goal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Goal Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="targetAmount"
          placeholder="Target Amount"
          value={formData.targetAmount}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Goal
      </button>
    </form>
  );
}

export default GoalForm;


