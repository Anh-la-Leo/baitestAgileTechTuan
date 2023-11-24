import React from "react";
import Ellipse from "../../imge/Ellipse 47.png";
import Group from "../../imge/Group 64.png";
function Footer() {
  return (
    <>
      <div className="footer_home">
        <div className="footer_home_top">
          <div className="data_ware">
            <ul className="local_one">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="36"
                  viewBox="0 0 49 36"
                  fill="none"
                >
                  <rect
                    y="15.8323"
                    width="19.8758"
                    height="19.8758"
                    rx="9.93789"
                    fill="#9C69E2"
                  />
                  <rect
                    x="28.8203"
                    y="0.925446"
                    width="19.8758"
                    height="34.7826"
                    rx="9.93789"
                    fill="#F063B8"
                  />
                </svg>
              </li>
              <li>
                <h2>DataWarehouse</h2>
              </li>
            </ul>
            <ul className="local_two">
              <li>Warehouse Society, 234 </li>
              <li>Bahagia Ave Street PRBW 29281</li>
            </ul>
            <ul className="local_three">
              <li>info@warehouse.project</li>
              <li>1-232-3434 (Main)</li>
            </ul>
          </div>
          <div className="data_ware">
            <h2 className="local_one">About</h2>
            <ul className="local_two">
              <li>Profile</li>
              <li>Features </li>
              <li>Careers</li>
              <li>DW News</li>
            </ul>
          </div>
          <div className="data_ware">
            <h2 className="local_one">About</h2>
            <ul className="local_two">
              <li>Support</li>
              <li>Sign up</li>
              <li>Guide</li>
              <li>Reports</li>
              <li>Q&A</li>
            </ul>
          </div>
          <div className="data_ware">
            <h2 className="local_one">Social Media</h2>
            <ul className="local_two_social">
              <li>
                <img src={Ellipse} />
              </li>
              <li>
                <img src={Ellipse} />
              </li>
              <li>
                <img src={Ellipse} />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_home_bot">
          <ul>
            <li>© Datawarehouse™, 2020. All rights reserved.</li>
            <li>Company Registration Number: 21479524.</li>
          </ul>
          <img src={Group} alt="group" />
        </div>
      </div>
    </>
  );
}
export default Footer;
