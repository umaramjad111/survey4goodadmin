import React from "react";
import Dropdowncharitycategory from "../../dropdown/dropdowncharitycategory";
import { useState } from "react";
export default function Addchairtyform() {
  const initialformvalues = {
    charityName: "",
    charityDescription: "",
    charityCategories: [],
    charityTagLine: "",
    donateLink: "",
    charityImage: null,
    charityHeadlineImage: null,
    charityLogoImage: null,
    secondaryPictures: null,
  };
  const [formvalues, setFormvalues] = useState({ ...initialformvalues });
  const [formError, setFormError] = useState({});
  const [issubmit, setIssubmit] = useState(false);
  const [imgstate, setImage] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };
  const imageHandler = (e) => {
    if (imgstate === 1) {
      setFormvalues({
        ...formvalues,
        charityImage: e.target.files[0],
      });
    }
    if (imgstate === 2) {
      setFormvalues({
        ...formvalues,
        charityHeadlineImage: e.target.files[0],
      });
    }
    if (imgstate === 3) {
      setFormvalues({
        ...formvalues,
        charityLogoImage: e.target.files[0],
      });
    }
    if (imgstate === 4) {
      setFormvalues({
        ...formvalues,
        secondaryPictures: e.target.files[0],
      });
    }
  };
  const onSelectChange = (name, value) =>
    setFormvalues({ ...formvalues, [name]: value });
  const handleSubmit = (e) => {
    //refresh sa bachany ky liye lgaty hain isko prevent ko
    e.preventDefault();
    setFormError(validate(formvalues));
    setIssubmit(true);
    console.log(formvalues, "here");
    if (
      formvalues.charityName &&
      formvalues.charityDescription &&
      formvalues.charityTagLine &&
      formvalues.donateLink &&
      formvalues.charityImage &&
      formvalues.charityLogoImage &&
      formvalues.charityCategories &&
      formvalues.secondaryPictures &&
      formvalues.charityHeadlineImage
    ) {
      alert("form filled");
      console.log("data", formvalues);
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    console.log(values, "here values");
    if (!values.charityName) {
      errors.charityName = "Charity Name is Required";
    }
    if (!values.charityCategories) {
      errors.charityCategories = "Charity Categories is Required";
    }
    if (!values.charityDescription) {
      errors.charityDescription = "Charity Description is Required";
    }
    if (!values.charityTagLine) {
      errors.charityTagLine = "Charity TagLine is Required";
    }
    if (!values.donateLink) {
      errors.donateLink = "Donate Link is Required";
    }
    if (!values.charityImage) {
      errors.charityImage = "Charity Image is Required";
    }
    if (!values.charityHeadlineImage) {
      errors.charityHeadlineImage = "Charity Headline Image is Required";
    }
    if (!values.charityLogoImage) {
      errors.charityLogoImage = "Charity Logo is Required";
    }
    if (!values.secondaryPictures) {
      errors.secondaryPictures = "Charity Secondary Images is Required";
    }
    return errors;
  };

  return (
    <div
      class="offcanvas offcanvas-end sidebar-canvas"
      tabindex="-1"
      id="offcanvasRight2"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          Add Charity
        </h5>
        <button
          type="button"
          class="btn-close bg-light"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <form className="charity__form" onSubmit={handleSubmit}>
        <label htmlFor="" className="w-100">
          Charity Name
          <input
            type="text"
            className="w-100 form-control mt-2"
            placeholder="Enter your charity name"
            name="charityName"
            value={formvalues.charityName}
            onChange={handleChange}
          />
          {formError.charityName ? (
            <p className="error__msg ">{formError.charityName}</p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Category
          <Dropdowncharitycategory
            selected={formvalues.charityCategories}
            handleChange={onSelectChange}
          />
          {formError.charityCategories ? (
            <p className="error__msg ">{formError.charityCategories}</p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Charity Description
          <input
            type="text"
            className="w-100 form-control mt-2"
            placeholder="Enter your charity description"
            name="charityDescription"
            value={formvalues.charityDescription}
            onChange={handleChange}
          />
          {formError.charityDescription ? (
            <p className="error__msg ">{formError.charityDescription}</p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Tag Line
          <input
            type="text"
            className="w-100 form-control mt-2"
            placeholder="Enter your tag line"
            name="charityTagLine"
            value={formvalues.charityTagLine}
            onChange={handleChange}
          />
          {formError.charityTagLine ? (
            <p className="error__msg ">{formError.charityTagLine}</p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Donate Link
          <input
            type="text"
            className="w-100 form-control mt-2"
            placeholder="Enter your Donation"
            name="donateLink"
            value={formvalues.donateLink}
            onChange={handleChange}
          />
          {formError.donateLink ? (
            <p className="error__msg ">{formError.donateLink}</p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Charity Image
          <input
            type="file"
            className="w-100 form-control mt-2"
            accept=".jpg,.png,.jpeg"
            onChange={imageHandler}
            onClick={() => setImage(1)}
          />
          {formError.charityImage ? (
            <p className="error__msg ">{formError.charityImage}</p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Charity Headline Image
          <input
            type="file"
            className="w-100 form-control mt-2"
            onChange={imageHandler}
            accept=".jpg,.png,.jpeg"
            onClick={() => setImage(2)}
          />
          {formError.charityHeadlineImage ? (
            <p className="error__msg ">{formError.charityHeadlineImage}</p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Charity Logo
          <input
            type="file"
            className="w-100 form-control mt-2"
            onChange={imageHandler}
            accept=".jpg,.png,.jpeg"
            onClick={() => setImage(3)}
          />
          {formError.charityLogoImage ? (
            <p className="error__msg ">{formError.charityLogoImage}</p>
          ) : (
            ""
          )}
        </label>
        <label htmlFor="" className="w-100 mt-2">
          Charity Secondary Image
          <input
            type="file"
            className="w-100 form-control mt-2"
            onChange={imageHandler}
            accept=".jpg,.png,.jpeg"
            onClick={() => setImage(4)}
          />
          {formError.secondaryPictures ? (
            <p className="error__msg ">{formError.secondaryPictures}</p>
          ) : (
            ""
          )}
        </label>

        <div className="add_charity">
          <button type="submit">Add Charity</button>
        </div>
      </form>
    </div>
  );
}
