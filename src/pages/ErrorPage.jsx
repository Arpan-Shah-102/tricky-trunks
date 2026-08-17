import { useState } from "react";
import { useNavigate } from "react-router";
import "./ErrorPage.css";

export function ErrorPage({ fadeDuration }) {
  const [errorPageShown, setErrorPageShown] = useState(true);
  const navigate = useNavigate();

  function closeErrorPage() {
    setErrorPageShown(false);
    setTimeout(() => {
      navigate('/');
    }, fadeDuration - 20);
  }

  return (
    <div className={`error-page fade-${!errorPageShown ? 'out' : 'in'}`}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button className="back-to-home" onClick={closeErrorPage}>Back to Home</button>
    </div>
  )
}