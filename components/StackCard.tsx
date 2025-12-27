interface StackCardProps {
  title: string;
  count: number;
  color: string;
}

export default function StackCard({ title, count, color }: StackCardProps) {
  return (
    <div
  className="w-full h-40 rounded-card flex items-center justify-between px-6 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
  style={{ backgroundColor: color }}
    >
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold">
        {count}
      </div>
    </div>
  );
}
