import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        MyApp
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/UseCallbackComponent">UseCallbackComponent</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ParentContext">ParentContext</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UseMemoParent">UseMemoParent</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customHooks">customHooks</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/useReducerAllQuestion">useReducerAllQuestion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/useRefAllQuestions">useRefAllQuestions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/usestateallquestion">useStateAllQuestion</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/performenceoptimization">PerformenceOptimization</Link>
          </li>

          {/* Dropdown 1 */}
          <li className="nav-item dropdown custom-dropdown">
            <span className="nav-link dropdown-toggle">Auto Complete</span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/autoCompleteComponent">
                  Auto Suggest{" "}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/app-dev">
                  App Development
                </Link>
              </li>
            </ul>
          </li>

          {/* Dropdown 2 */}
          <li className="nav-item dropdown custom-dropdown">
            <span className="nav-link dropdown-toggle">E Commerce</span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/eCommerceUseSTate">
                  E Commerce use State
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/eCommerceContextApi">
                  E Commerce Context API
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/currency-converter">
              Currency Converter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
