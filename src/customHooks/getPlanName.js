import { useLocation } from "react-router-dom";

export const usePlanName = () => {
  const { pathname } = useLocation();

  let planname = "";
  for (let i = pathname.length - 1; i >= 0; i--) {
    if (pathname[i] === "/") {
      break;
    }

    planname += pathname[i];
  }

  planname = planname.split("").reverse().join("").toUpperCase();

  return planname;
};
