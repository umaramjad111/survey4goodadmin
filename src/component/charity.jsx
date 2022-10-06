import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import { doc, updateDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Noimage from "../images/noimage.png";
import Charitysingleview from "../canvas/charitycanvas/charitysingleview";
import Addchairtyform from "../canvas/charitycanvas/addchairtyform";
import { Modal } from "react-bootstrap";
import Updatecharity from "../canvas/charitycanvas/updatecharity";
export default function Charity() {
  const [charitiesdata, setcharitiesdata] = useState([]);
  const [singleitemCharity, setSingleitemCharity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fetchAllCharities = async () => {
    try {
      await getDocs(collection(db, "charities")).then((snapshot) => {
        // debugger;
        if (snapshot !== null) {
          const charitydataarr = snapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }));
          setcharitiesdata(charitydataarr);
          setLoading(false);

          // console.log("idddddd", charitiesdata);
        }
      });
    } catch (error) {
      console.error("Failed to retrieve data", error);
    }
  };
  const [updatechar, setUpdatechar] = useState({
    data: {
      charityName: "",
      charityDescription: "",
    },
    id: "",
  });
  const initialvalues = {
    charityName: "",
    charityDescription: "",
  };
  const [formvalues, setFormvalues] = useState({ ...initialvalues });

  const modalfunction = (item) => {
    setUpdatechar({ ...updatechar, item });
    setFormvalues({
      ...formvalues,
      charityName: item.data.charityName,
      charityDescription: item.data.charityDescription,
    });

    // handleShow();
    // console.log("www", item);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };
  const updatecharity = async (e) => {
    e.preventDefault();
    // toast.success(updatechar.item.id);
    const charityref = doc(db, "charities", updatechar.item.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(charityref, {
      charityName: formvalues.charityName,
      charityDescription: formvalues.charityDescription,
    });
    // window.location.reload();
    handleClose();
  };
  useEffect(() => {
    fetchAllCharities();
  }, [charitiesdata]);

  return (
    <div className="main__section">
      <Sidebar />
      <>
        <Addchairtyform />
        <Charitysingleview singleitem={singleitemCharity} />
        <Updatecharity
          handleChange={handleChange}
          formvalues={formvalues}
          updatecharity={updatecharity}
        />
        <div className="each__section">
          <div className="add__charity">
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight2"
              aria-controls="offcanvasRight2"
            >
              Add Charity
            </button>
          </div>
          <table class="table text-white">
            <thead class="thead-dark">
              <tr>
                <th scope="col">charityImage</th>
                <th scope="col">charityLogoImage</th>
                <th scope="col">charityName</th>
                <th scope="col">charityDescription</th>
                <th scope="col">charityTagLine</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading || !charitiesdata
                ? "Loading...."
                : charitiesdata.map((item) => (
                    <tr>
                      <td>
                        {item.data.charityImage ? (
                          <img
                            src={item.data.charityImage}
                            alt="charityimage"
                          />
                        ) : (
                          <img src={Noimage} alt="" />
                        )}
                      </td>
                      <td>
                        {item.data.charityLogoImage ? (
                          <img
                            src={item.data.charityLogoImage}
                            alt="charitylogimage"
                          />
                        ) : (
                          <img src={Noimage} alt="" />
                        )}
                      </td>
                      <td> {item.data.charityName}</td>
                      <td>
                        {" "}
                        <div className="charitydescription">
                          {" "}
                          {item.data.charityDescription}
                        </div>
                      </td>
                      <td>{item.data.charityTagLine}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2 actions">
                          <span
                            className="btn btn-primary"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                            onClick={() => setSingleitemCharity(item.data)}
                          >
                            View
                          </span>
                          <span
                            className="btn btn-success"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#updatecharity"
                            aria-controls="updatecharity"
                            onClick={() => modalfunction(item)}
                          >
                            Update
                          </span>
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
