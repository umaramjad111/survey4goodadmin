import React from "react";
import Sidebar from "./sidebar";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Surveysingleview from "../canvas/surveycanvas/surveysingleview";
export default function Surveys() {
  const [surveyssdata, setsurveysdata] = useState([]);
  const [singleitemSurvey, setSingleitemSurvey] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllSurveys = async () => {
    try {
      await getDocs(collection(db, "surveys")).then((snapshot) => {
        // debugger;
        if (snapshot !== null) {
          const surveydataarr = snapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }));
          setsurveysdata(surveydataarr);
          setLoading(false);

          console.log("surveysdata", surveyssdata);
        }
      });
    } catch (error) {
      console.error("Failed to retrieve data", error);
    }
  };

  useEffect(() => {
    fetchAllSurveys();
  }, [surveyssdata]);

  return (
    <div className="main__section">
      <>
        <Sidebar />
        <div className="each__section">
          <Surveysingleview singleitemSurvey={singleitemSurvey} />
          <table class="table text-white">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Survey Image</th>
                <th scope="col">Survey title</th>
                <th scope="col">Survey Tag Line</th>
                <th scope="col">Audience</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading || !surveyssdata
                ? "Loading..."
                : surveyssdata.map((item) => (
                    <tr>
                      <td>
                        <img src={item.data?.survey?.surveyImage} alt="" />
                      </td>
                      <td>
                        <p>{item.data?.survey?.title}</p>
                      </td>
                      <td>
                        <p>{item.data?.survey?.tagline}</p>
                      </td>
                      <td>
                        {item.data?.target?.audience ? (
                          <p>{item.data?.target?.audience}</p>
                        ) : (
                          "Nill"
                        )}
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 actions">
                          <span
                            className="btn btn-primary"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight3"
                            aria-controls="offcanvasRight3"
                            onClick={() => setSingleitemSurvey(item.data)}
                          >
                            View
                          </span>
                          <span className="btn btn-success">Update</span>
                          <span className="btn btn-danger">Delete</span>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}
