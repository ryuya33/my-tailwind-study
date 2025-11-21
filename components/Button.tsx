type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "danger";
};

export default function Button({ label, href, variant = "primary" }: ButtonProps) {
  const base = "px-4 py-2 rounded-xl transition font-medium shadow";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700"
      : variant === "outline"
      ? "border border-gray-400 text-gray-700 hover:bg-gray-100"
      : "bg-red-500 text-white hover:bg-red-600";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {label}
    </a>
  );
}
