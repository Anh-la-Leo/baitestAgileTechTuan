import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./table.css";
import Logo from "../../imge/logo.png";
import Pen from "../../imge/iconPen.png";
import Trash from "../../imge/iconTrash.png";
// import { useNavigate } from "react-router-dom";
// import { render } from "@testing-library/react";
export const Table = () => {
  const [provinces, setProvinces] = useState([]);
  const renderData = localStorage.getItem("getSignin");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [logout, setLogout] = useState(false);

  const openDeleteModal = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setItemToDelete(null);
    setShowDeleteModal(false);
  };
  const handleConfirmDelete = async () => {
    if (itemToDelete && itemToDelete.id) {
      try {
        await axios.delete(
          `https://test-react.agiletech.vn/posts/${itemToDelete.id}`,
          {
            headers: {
              Authorization: `Bearer ${renderData}`,
            },
          }
        );
        const updatedProvinces = provinces.filter(
          (province) => province.id !== itemToDelete.id
        );
        setProvinces(updatedProvinces);
        closeDeleteModal();
      } catch (error) {
        console.error("Lỗi khi xóa mục:", error);
      }
      // Xử lý xóa ở đây
    }
  };
  useEffect(() => {
    // Gửi một yêu cầu GET bằng Axios khi component được tải lần đầu
    axios
      .get(`https://test-react.agiletech.vn/posts`, {
        headers: {
          Authorization: `Bearer ${renderData}`,
        },
      })
      .then((response) => {
        setProvinces(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [renderData]);
  // const navigate = useNavigate();
  // const handleAdd = () => {
  //   navigate("/TableUser");
  // };
  return (
    <div className="form_table">
      <div className="left_table">
        <div className="contetain">
          <img src={Logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/home" className="link_posts">
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="link_logout">
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="right_table">
        <div className="top_table">
          <button className="text_btn_add" type="buton">
            <NavLink to="/AddTable" className="link_add">
              <strong>Add new</strong>
            </NavLink>
          </button>
          <div className="species_action_search">
            {/* Thanh tìm kiếm */}
            <input
              className="search_title"
              placeholder="Title"
              type="text"
              // value={props.searchInput}
              // onChange={handleSearchInputChange}
            />
            <input
              className="search_tags"
              placeholder="Tags"
              type="text"
              // value={props.searchInput}
              // onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <table className="table_profile">
          <thead>
            <tr
              className="row"
              style={{ borderBottom: "solid", borderColor: "#bbbbbb" }}
            >
              <td className="col-sm-2">
                <strong>ID</strong>
              </td>
              <td className="col-sm">
                <strong>Title</strong>
              </td>
              <td className="col-sm">
                <strong>Description</strong>
              </td>
              <td className="col-sm">
                <strong>Tags</strong>
              </td>
              <td className="col-sm">
                <strong>Actions</strong>
              </td>
            </tr>
          </thead>
          <tbody id="getUser">
            {provinces.map((province, index) => (
              <tr key={province.id} className=" CallTable">
                <td className="col_id">
                  <strong>{index + 1}</strong>
                </td>
                <td className="col_title">
                  <strong>{province.title}</strong>
                </td>
                <td className="col_descrip">
                  <strong>{province.description}</strong>
                </td>
                <td className="col_tags">
                  <strong>
                    {Array.isArray(province.tags)
                      ? province.tags.join(", ")
                      : province.tags}
                  </strong>
                </td>
                <td className=" icon_table">
                  <div>
                    <p
                    // onClick={() => handleEditClick(province.id)}
                    // className="text-danger"
                    // style={{ paddingRight: "20px" }}
                    >
                      <img src={Pen} alt="edit" />
                    </p>
                    <p
                      className="p_delete"
                      onClick={() => openDeleteModal(province)}
                    >
                      <img src={Trash} alt="delete" />
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="items_per_page">
          <select
            id="itemsPerPage"
            // value={filters.perpage}
            // onChange={handlePerPageChange}
          >
            <option value="5">5 / trang</option>
            <option value="10">10 / trang</option>
            <option value="25">25 / trang</option>
            <option value="50">50 / trang</option>
          </select>
        </div>
        {showDeleteModal && (
          <div className="modal" id="Delete">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-danger text-white">
                  <h4 className="modal-title">Bạn có chắc chắn không?</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeDeleteModal}
                  ></button>
                </div>

                <div className="modal-body">
                  <p>
                    Bạn có chắc muốn xóa{" "}
                    <strong>{itemToDelete && itemToDelete.id}</strong>. Điều này
                    hoàn toàn không thể hoàn tác!
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeDeleteModal}
                  >
                    Không
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleConfirmDelete();
                      closeDeleteModal();
                    }}
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
