import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Hero Content */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Welcome to FactWise Home
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto">
            Experience seamless navigation and beautiful design
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/95 hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-purple-500/50"
        >
          Go to Dashboard
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
