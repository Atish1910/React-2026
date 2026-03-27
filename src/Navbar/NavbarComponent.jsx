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
          <li className="nav-item dropdown custom-dropdown">
            <span className="nav-link dropdown-toggle">Hooks</span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/usestateallquestion">
                  Use State All Question
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/useReducerAllQuestion">
                  Use Reducer All Question
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/useRefAllQuestions">
                  UseRef All Questions
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/customHooks">
                  Custom Hooks
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/UseCallbackComponent">
                  Use Callback Component
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/UseMemoParent">
                  Use Memo Parent
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown custom-dropdown">
            <span className="nav-link dropdown-toggle">ContextAPI</span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/ParentContextPage">
                  ParentContextPage
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/useReducerAllQuestion">
                  Use Reducer All Question
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown custom-dropdown">
            <span className="nav-link dropdown-toggle">Questions</span>
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
              <li>
                <Link className="dropdown-item" to="/currency-converter">
                  Currency Converter
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/pagination">
                  Pagination
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/accordionusestate">
                  AccordionUseState
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/ContextApiParent">
              ContextApiParent
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/performenceoptimization">
              PerformenceOptimization
            </Link>
          </li>

          {/* Dropdown 1 */}
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
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
