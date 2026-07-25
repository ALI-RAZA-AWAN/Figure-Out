export default function LogoMark({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6 4 H18 V8.4 H10.4 V11 H16.2 V15.4 H10.4 V20 H6 Z" />
    </svg>
  );
}
