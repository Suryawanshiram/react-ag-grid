import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm rounded-md">
      <div className="mx-auto max-w-7xl px-4 h-12 flex items-center justify-between">
        <h1 className="text-lg cursor-pointer font-semibold text-gray-800">
          FactWise
        </h1>

        {/* User Icon */}
        <button className="flex items-center gap-2 rounded-full p-2 hover:cursor-pointer bg-gray-100 hover:bg-gray-200">
          <User className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </nav>
  );
}
