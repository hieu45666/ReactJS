import Homepage from "./user/Homepage";
import Medicine from "./user/Medicine";
import Disease from "./user/Disease";
const routers = [
    {
      id : 1,
      path: "/",
      element: <Homepage></Homepage>,
      name : "Homepage",
    },
    {
        id : 2,
        path: "/medicine",
        element: <Medicine></Medicine>,
        name : "Medicine",
      },
      {
        id : 3,
        path: "/",
        element: <Disease></Disease>,
        name : "Disease",
      },
  ];

export default routers;