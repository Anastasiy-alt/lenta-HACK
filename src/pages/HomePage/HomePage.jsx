import { SerchString } from "../../components/SerchString/SerchString";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { useRef } from "react";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const [inHeader, setInHeader] = useState(false);

  const headerRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const search = searchRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInHeader(false);
        } else {
          setInHeader(true);
        }
      },
      { threshold: 0.5 }
    );

    if (header && search) {
      observer.observe(search);
    }

    return () => {
      if (header && search) {
        observer.unobserve(search);
      }
    };
  }, []);

  return (
    <div>
      <Header inHeader={inHeader} ref={headerRef} />
      <SerchString ref={searchRef} />
    </div>
  );
};
