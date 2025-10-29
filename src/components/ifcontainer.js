export default function IfContainer({ condition, children }) {
  if (!condition) return null;

  return <>{children}</>;
}
