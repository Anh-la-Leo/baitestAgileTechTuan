import React from "react";
import backone from "../../imge/backone.png";
import One from "../../imge/01.png";
import Two from "../../imge/2.png";
import Three from "../../imge/3.png";
import Four from "../../imge/4.png";
import Learn from "../../imge/Group 57.png";
import Test from "../../imge/6.png";
import We from "../../imge/Ellipse 76.png";
function Main() {
  return (
    <>
      <div className="main">
        <div className="data_storage">
          <div className="contenr_left">
            <h1>Save your data storage here.</h1>
            <p>
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <button className="link_login_one">
              <a className={"link_login"} href="#">
                Learn more
              </a>
            </button>
          </div>
          <div className="image_one_right">
            <img src={backone} alt="backone 1" />
          </div>
        </div>
        <div className="features">
          <h1>Features</h1>
          <p>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
          <div className="img">
            <div className="img_search">
              <img src={One} alt="search" />
              <div className="text-overlay">
                <h1>Search Data</h1>
                <p>
                  Don’t worry if your data is very large, the Data Warehoue
                  provides a search engine, which is useful for making it easier
                  to find data effectively saving time.
                </p>
                <img src={Learn} width={100} />
              </div>
            </div>
            <div className="img_search">
              <img src={Two} alt="search" />
              <div className="text-overlay">
                <h1>24 Hours Access</h1>
                <p>
                  Access is given 24 hours a full morning to night and meet
                  again in the morning, giving you comfort when you need data
                  when urgent.
                </p>
                <img src={Learn} width={100} />
              </div>
            </div>
            <div className="img_search">
              <img src={Three} alt="search" />
              <div className="text-overlay">
                <h1>Print Out</h1>
                <p>
                  Print out service gives you convenience if someday you need
                  print data, just edit it all and just print it.
                </p>
                <img src={Learn} width={100} />
              </div>
            </div>
            <div className="img_search">
              <img src={Four} alt="search" />
              <div className="text-overlay">
                <h1>Security Code</h1>
                <p>
                  Data Security is one of our best facilities. Allows for your
                  files to be safer. The file can be secured with a code or
                  password that you created, so only you can open the file.
                </p>
                <img src={Learn} width={100} />
              </div>
            </div>
          </div>
          <div className="Testimo">
            <img src={Test} alt="test" />
            <div className="testtext">
              <h1>Testimonials</h1>
              <div className="card">
                <div className="son_card">
                  <img
                    src={We}
                    alt="we"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <ul>
                    <li style={{ marginBottom: "20px" }}>
                      <h2>John Fang </h2>
                      <p>wordfaang.com</p>
                    </li>
                    <li>
                      <p style={{ width: "300px" }}>
                        Suspendisse ultrices at diam lectus nullam. Nisl,
                        sagittis viverra enim erat tortor ultricies massa
                        turpis. Arcu pulvinar aenean nam laoreet nulla.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
