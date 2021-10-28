import Navigation from "./navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}