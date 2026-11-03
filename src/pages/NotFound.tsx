import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout navVariant="light">
      <SEO
        title="Page Not Found | Beyond Impact"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <section className="min-h-[70vh] flex items-center justify-center bg-white text-navy px-6 py-32">
        <div className="max-w-md text-center">
          <div className="eyebrow text-coral justify-center">404 Error</div>
          <h1 className="display mt-4 text-5xl md:text-6xl text-navy">
            Page not found
          </h1>
          <p className="mt-4 text-base text-navy/70 leading-relaxed">
            The link you followed may be broken or the page may have been moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-medium text-white transition-all hover:bg-coral/90 shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" /> Return to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
