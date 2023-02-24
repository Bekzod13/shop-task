import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to='/' className="nav-logo footer-logo">
            SHOP TASK
        </Link>
        <p>&copy; CopyRighted by Bekzod Sharobiddinov. 24.02.2022 v1.0.0</p>
      </div>
    </footer>
  );
}

export default memo(Footer);
