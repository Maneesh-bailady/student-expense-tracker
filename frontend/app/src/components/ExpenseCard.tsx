import React from "react";
import { Trash2 } from "lucide-react";

interface ExpenseProps {
  _id: string;
  title: string;
  amount: number;
  category: string;
  onDelete: (id: string) => void;
}

const ExpenseCard = ({ _id, title, amount, category, onDelete }: ExpenseProps) => (
  <div className="bg-white p-4 rounded-2xl shadow-md flex justify-between items-center mb-4 hover:shadow-lg transition">
    <div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{category}</p>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-black font-semibold">${amount.toFixed(2)}</span>
      <button
        onClick={() => onDelete(_id)}
        className="text-red-500 hover:text-red-700 transition"
        title="Delete Expense"
      >
        <Trash2 size={18} />
      </button>
    </div>
  </div>
);

export default ExpenseCard;
