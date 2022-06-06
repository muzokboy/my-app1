// import * as React from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// export default function PaginationRounded() {
//   return (
//     <Stack sx={{ justifyContent: "right" }} spacing={0}>
//       <Pagination
//         sx={{ display: "inline" }}
//         count={5}
//         variant="outlined"
//         shape="rounded"
//       />
//     </Stack>
//   );
// }

import React from "react";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const index = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ul style={{ display: "flex", listStyle: "none", float: "right" }}>
        <li
          style={{
            padding: "5px 10px 5px 10px",
            backgroundColor: "white",
            // margin: "2px",
            border: "1px solid gray ",
            borderRadius: "4px 0px 0px 4px",
          }}
        >
          <KeyboardDoubleArrowLeftIcon sx={{ fontSize: "12px" }} />
        </li>
        <li
          style={{
            padding: "5px 10px 5px 10px",
            backgroundColor: "#428BCA",
            // margin: "2px",
            border: "1px solid gray ",
            color: "white",
          }}
        >
          1
        </li>
        <li
          style={{
            padding: "5px 10px 5px 10px",
            backgroundColor: "white",
            // margin: "2px",
            border: "1px solid gray ",
            color: "#428bca",
          }}
        >
          2
        </li>
        <li
          style={{
            padding: "5px 10px 5px 10px",
            backgroundColor: "white",
            // margin: "2px",
            border: "1px solid gray ",
            color: "#428bca",
          }}
        >
          3
        </li>
        <li
          style={{
            padding: "5px 10px 5px 10px",
            backgroundColor: "white",
            // margin: "2px",
            border: "1px solid gray ",
            color: "#428bca",
          }}
        >
          4
        </li>
        <li
          style={{
            padding: "5px 10px 5px 10px",
            backgroundColor: "white",
            // margin: "2px",
            border: "1px solid gray ",
            color: "#428bca",
          }}
        >
          5
        </li>
        <li
          style={{
            padding: "5px 10px 5px 10px",
            backgroundColor: "white",
            // margin: "2px",
            border: "1px solid gray ",
            borderRadius: "0px 4px 4px 0px",
            color: "#428bca",
          }}
        >
          <KeyboardDoubleArrowRightIcon sx={{ fontSize: "12px" }} />
        </li>
      </ul>
    </div>
  );
};

export default index;
