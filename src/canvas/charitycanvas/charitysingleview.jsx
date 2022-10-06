import React from "react";

export default function Charitysingleview({singleitem}) {
  return (
    <div
      class="offcanvas offcanvas-end sidebar-canvas"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          {singleitem.charityName}
        </h5>
        <button
          type="button"
          class="btn-close bg-light"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <img
            src={singleitem.charityImage}
            alt="charityimage"
            className="w-100"
          />
        </div>
        <div class="dropdown mt-3  d-flex justify-content-end">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Categories
          </button>
          <ul class="dropdown-menu">
            {singleitem.charityCategories?.map((item) => (
              <li>
                <a class="dropdown-item" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="singledescription mt-4">
          <p>
            {" "}
            <span className="fw-bold fs-5"> Description : </span>{" "}
            {singleitem.charityDescription}{" "}
          </p>
        </div>
        <h5 className="mt-4">secondaryPictures</h5>
        <div className="secondarypictures d-flex gap-2">
          {singleitem.secondaryPictures?.map((item) => (
            <div>
              <img src={item} alt="" className="w-100" />
            </div>
          ))}
        </div>
        <h5 className="mt-4">charityTagLine</h5>
        <p>{singleitem.charityTagLine}</p>
        <div className="mt-4">
          <button className="donate__link">
            <a href={singleitem.donateLink}>Donate Link</a>
          </button>
        </div>
      </div>
    </div>
  );
}
