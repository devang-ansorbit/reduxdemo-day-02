import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/userSlice";
import React from "react";
import axios from "axios";

export const User = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const {value} = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  React.useEffect(() => {
    // fetch("https://reqres.in/api/users")
    //   .then((res) => {
    //    return res.json();
    //   })
    //   .then((res) => {
    //     dispatch(setData(res.data));
    //   })
    //   .catch((err) => console.log("Error:", err));

    axios
      .get(`https://reqres.in/api/users?page=${value}&per_page=3&total_pages=10`)
      .then((res) => {
        console.log("hey Page:",value)
        console.log(res.data);
        dispatch(setData(res.data.data));
      })
      .catch((err) => console.log("Error:", err));
  }, [value]);

  console.log(user);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      {user.map((ele) => (
        <div key={ele.id} style={{ margin: "20px" }}>
          <div>
            <img src={ele.avatar} alt='' />
            <h3>
              {ele.first_name} {ele.last_name}
            </h3>
            <p>{ele.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
