
import Link from "next/link";

interface LogoProps {
  compact?: boolean;
  href?: string;
}

export default function Logo({
  compact = false,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="QuantumInsight home"
      className="inline-flex items-center"
    >
      <img
        src="/logo.svg"
        alt="QuantumInsight"
        width={compact ? 52 : 180}
        height={compact ? 52 : 64}
        className={
          compact
            ? "h-12 w-12 object-contain"
            : "h-16 w-auto max-w-[190px] object-contain"
        }
      />
    </Link>
  );
}
