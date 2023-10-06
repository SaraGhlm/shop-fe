import { Route, Routes } from "react-router";
import { Home } from "./home/index.page";

/* ---------------------------------------------------------------------------------------------------------------
 * Root
 * -------------------------------------------------------------------------------------------------------------*/
export const Root: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
