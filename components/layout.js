import Navigation from "./navigation";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <div style={{ minHeight: 700 }}>{children}</div>
      <Footer />
    </div>
  );
}
