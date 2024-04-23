import Image from "next/image";
import styles from "./page.module.css";
import Three from "./Three";
import Four from "./Four";

export default function Home() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" style={{ width: "1200px", height: "1200px" }} >
            <Four />
          </div>
        </div>
      </div>

  );
}
