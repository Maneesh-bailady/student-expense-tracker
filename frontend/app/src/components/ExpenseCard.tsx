import React from "react";
import { Trash2 } from "lucide-react";

interface ExpenseProps {
  _id: string;
  title: string;
  amount: number;
  category: string;
  amountFormatted: string;
  onDelete: (id: string) => void;
}

const ExpenseCard = ({
  _id,
  title,
  amount,
  category,
  amountFormatted,
  onDelete,
}: ExpenseProps) => (
  <div className="relative bg-white p-4 rounded-2xl shadow-md mb-4 hover:shadow-lg transition">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-black font-semibold">{amountFormatted}</span>
        <button
          onClick={() => onDelete(_id)}
          className="text-red-500 hover:text-red-700 transition"
          title="Delete Expense"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>

    {/* Daily limit alert if > ₹100 */}
    {amount > 100 && (
      <div className="mt-3 px-3 py-2 bg-yellow-100 text-yellow-700 rounded-md text-sm font-medium">
        ⚠️ This expense exceeds ₹100. Be cautious!
      </div>
    )}
  </div>
);

export default ExpenseCard;
