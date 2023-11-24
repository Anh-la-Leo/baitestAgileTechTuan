import Layout from "../layout/indext-no-signin";
import Signin from "../component/login/Signin";
import { Table } from "../component/user/table";
import { AddTable } from "../component/user/addtable";
const publicRouter = [
  {
    path: "/home",
    component: Layout,
  },
  {
    path: "/",
    component: Signin,
  },
  {
    path: "/TableUser",
    component: Table,
  },
  {
    path: "/AddTable",
    component: AddTable,
  },
];
const privateRouter = [];
export { publicRouter, privateRouter };
