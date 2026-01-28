import Card from "./Card";

export default function StatCard({ label, value }) {
  return (
    <Card>
      <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
      <p className="text-3xl font-semibold text-white mt-1">{value}</p>
    </Card>
  );
}
