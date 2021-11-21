import Navigation from "./navigation";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <div style={{}}>
      <Navigation />
      <div
        style={{
          minHeight: "90vh",
          maxWidth: 1640,
          margin: "0 auto"
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
