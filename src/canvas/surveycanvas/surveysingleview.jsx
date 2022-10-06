import React from "react";
import ReactPlayer from "react-player";
export default function Surveysingleview({ singleitemSurvey }) {
  return (
    <div
      class="offcanvas offcanvas-end sidebar-canvas"
      tabindex="-1"
      id="offcanvasRight3"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <>
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            {singleitemSurvey?.survey?.title}
          </h5>
          <button
            type="button"
            class="btn-close bg-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </>
      </div>
      <div
        className="p-3 d-flex flex-column gap-3 surveysingleview"
        
      >
        <>
          <div className="d-flex justify-content-center mt-3">
            <img
              src={singleitemSurvey?.survey?.surveyImage}
              alt="surveyImg"
              className="surveysingleviewimg"
            />
          </div>
          <p className="mb-0">
            {" "}
            <span className="fw-bold fs-6">Tag Line : </span>{" "}
            {singleitemSurvey?.survey?.tagline}{" "}
          </p>
          <p className="mb-0">
            {" "}
            <span className="fw-bold fs-6">customerReference : </span>{" "}
            {singleitemSurvey?.customer?.customerReference}{" "}
          </p>
          <p className="mb-0">
            {" "}
            <span className="fw-bold fs-6">Reward Tokens : </span>{" "}
            {singleitemSurvey?.reward?.tokens}{" "}
          </p>
          {singleitemSurvey?.target?.audience ? (
            <p className="mb-0">
              {" "}
              <span className="fw-bold fs-6">Audience : </span>{" "}
              {singleitemSurvey?.target?.audience}{" "}
            </p>
          ) : (
            <p className="mb-0">
              {" "}
              <span className="fw-bold fs-6">Audience : </span> Nill
            </p>
          )}
          <p className="mb-0 fw-bold fs-3 text-center">Questions :</p>
          <div>
            {singleitemSurvey?.survey?.questions?.map((item) => (
              <div>
                <p className="mb-0  mt-3">
                  {" "}
                  <span className="fw-bold fs-6">Question : </span>{" "}
                  {item?.title}{" "}
                </p>
                <p className="mb-0  mt-3">
                  {" "}
                  <span className="fw-bold fs-6">Question Type : </span>{" "}
                  {item?.questionType}{" "}
                </p>
                <p className="mb-0  mt-3">
                  {" "}
                  <span className="fw-bold fs-6">Field Type : </span>{" "}
                  {item?.fieldtype}{" "}
                </p>
                {item?.videoRef ? (
                  <p className="mb-0 fw-bold mt-3 mb-3">Video :</p>
                ) : (
                 item?.options  && <p className="mb-0 fw-bold mt-3">Options :</p>
                )}
                {item?.videoRef ? (
                  <video width="100%" controls>
                    <source src={item?.videoRef} />
                  </video>
                ) : (
                  ""
                )}
                {item?.options?.map((item2) => (
                  <div
                    className="d-flex align-items-center gap-2 mt-2 p-2"
                    style={{ border: "1px solid #fff" }}
                  >
                    <p className="mb-0">{item2?.value}.</p>
                    {item2?.title?.includes("https") ? (
                      <img src={item2?.title} alt="optionlogo" />
                    ) : (
                      <p className="mb-0">{item2?.title}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
