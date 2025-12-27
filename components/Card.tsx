import Image from "next/image";

interface CardProps {
  title: string;
  logo: string;
  color: string;
}

export default function Card({ title, logo, color }: CardProps) {
  return (
    <div
  className="w-full h-40 rounded-card flex items-center px-6 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl"
  style={{ backgroundColor: color }}
>
      <Image
        src={logo}
        alt={title}
        width={48}
        height={48}
        className="rounded-md object-cover"
      />
      <h2 className="text-xl font-semibold ml-4">{title}</h2>
    </div>
  );
}
