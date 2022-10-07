import React from "react";

export default function Updatecharity({
  updatecharity,
  formvalues,
  handleChange,
}) {
  return (
    <div
      class="offcanvas offcanvas-end sidebar-canvas"
      tabindex="-1"
      id="updatecharity"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          Update Charity
        </h5>
        <button
          type="button"
          class="btn-close bg-light"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <form onSubmit={updatecharity} className="p-2">
        <label htmlFor="" className="w-100">
          Charity Name
          <input
            type="text"
            name="charityName"
            placeholder="Enter your charity Name"
            className="w-100 form-control mt-2"
            value={formvalues.charityName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Charity Description
          <input
            type="text"
            name="charityDescription"
            placeholder="Enter your charity Description"
            className="w-100 form-control mt-2"
            value={formvalues.charityDescription}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Charity TagLine
          <input
            type="text"
            name="charityTagLine"
            placeholder="Enter your charity Description"
            className="w-100 form-control mt-2"
            value={formvalues.charityTagLine}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Donate Link
          <input
            type="text"
            name="donateLink"
            placeholder="Enter your charity Description"
            className="w-100 form-control mt-2"
            value={formvalues.donateLink}
            onChange={handleChange}
          />
        </label>

        <button
          className="btn btn-primary mt-3"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          type="submit"
        >
          Update Charity
        </button>
      </form>
    </div>
  );
}
