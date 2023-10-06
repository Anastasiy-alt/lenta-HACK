import { useDispatch, useSelector } from "react-redux";
import {
  isIntersection,
  isIntersectionTop,
} from "../redux/slices/headerIntersectionSlice";

// const { isIntersection } = useSelector((store) => store.headerIntersection);

export const useHeaderIntersection = ({ headerRef, searchRef }) => {
  const dispatch = useDispatch();

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // setInHeader(false);
        dispatch(isIntersectionTop());
      } else {
        // setInHeader(true);
        dispatch(isIntersection());
      }
    },
    { threshold: 0.5 }
  );

  if (headerRef.current && searchRef.current) {
    observer.observe(searchRef.current);
  }

  return () => {
    if (headerRef.current && searchRef.current) {
      observer.unobserve(searchRef.current);
    }
  };
};
