import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MegeSTLViewerApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}
