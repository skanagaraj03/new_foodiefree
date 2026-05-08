import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="auth-page">
      <button type="button" className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
        ←
      </button>

      <section className="auth-card">
        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          {!isLogin && (
            <>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Mobile" />
              <input type="text" placeholder="District" />
              <input type="text" placeholder="City" />
            </>
          )}
          {isLogin && <input type="email" placeholder="Email" />}
          <input type="password" placeholder="Password" />

          <button type="submit" className="auth-submit">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <button
          type="button"
          className="auth-toggle"
          onClick={() => setIsLogin((current) => !current)}
        >
          {isLogin ? "Create new account - signup" : "Already i have account - login"}
        </button>

        <Link to="/" className="auth-home-link">
          Go home
        </Link>
      </section>
    </main>
  );
}

export default Auth;
