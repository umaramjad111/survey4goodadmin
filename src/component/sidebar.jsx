import React from "react";
import logosurvey from "../images/surveysidebarlogo.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar__section">
      <div className="text-center p-4">
        <div>
          <img src={logosurvey} alt="" />
        </div>
        <h4 className="mt-3 fw-bold">Survey 4 Good</h4>
        <hr />
      </div>
      <div className="list__sidebar p-2">
        <li>
          <span>
            <i class="ri-survey-line"></i>
          </span>
          <p>Add Survey</p>
        </li>
        <li
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight2"
          aria-controls="offcanvasRight2"
        >
          <span>
            <i class="ri-bar-chart-grouped-line"></i>
          </span>
          <p>Add Charity</p>
        </li>
        <li>
          <span>
            <i class="ri-image-line"></i>
          </span>
          <p>Add Banner Image</p>
        </li>
        <Link to="/surveys">
          <li>
            <span>
              <i class="ri-survey-fill"></i>
            </span>
            <p>Surveys</p>
          </li>
        </Link>
        <Link to="/charities">
          <li>
            <span>
              <i class="ri-bar-chart-2-fill"></i>
            </span>
            <p>Charity</p>
          </li>
        </Link>
        <li>
          <span>
            <i class="ri-image-add-fill"></i>
          </span>
          <p>Banner Images</p>
        </li>
      </div>
    </div>
  );
}
