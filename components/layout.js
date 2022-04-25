import Navigation from "./header/navigation";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <div style={{}}>
      <Navigation />
      <div
        style={{
          minHeight: "90vh",
          maxWidth: 1500,
          margin: "0 auto"
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
