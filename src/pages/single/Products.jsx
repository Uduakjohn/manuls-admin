import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Products = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://media.istockphoto.com/id/177043240/photo/indian-butter-chicken-curry.jpg?b=1&s=170667a&w=0&k=20&c=kJV8WfLsdY8sQ3p4qKdhgDwgZt9fg9pOoqbc09D2b3s="
                alt=""
                className="itemImg"
              />
              {/* <div className="details">
                <h1 className="itemTitle">Name</h1>
                <div className="detailItem">
                  <span className="itemKey">item</span>
                  <span className="itemValue">janedoe@gmail</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div> */}
                {/* <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        {/* </div> */}
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  );
};

export default Products;

