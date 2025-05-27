// components/Layout.jsx
import { Outlet, useNavigation } from "react-router-dom";
import FullScreenLoader from "./FullScreenLoader";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <FullScreenLoader />}
      <Outlet />
    </>
  );
};

export default Layout;
