import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./footer/Footer"));
const Navigation = dynamic(() => import("./header/navigation"));

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
