import Card from "./Card";

export default function StatCard({ label, value }) {
  return (
    <Card>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-semibold text-gray-900">{value}</p>
    </Card>
  );
}
