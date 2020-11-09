import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Layout({ children }: any) {
  return (
    <div className="bg-primary">
      <Header />
      <div className="container mx-auto antialiased">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
