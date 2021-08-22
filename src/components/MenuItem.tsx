import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";

const MenuItem = (props: any) => {
  const location = useLocation();
  const { route, item } = props;
  const [active, setActive] = useState(false);

  useEffect(() => {
    location.pathname === `/${route}` ? setActive(true) : setActive(false);
  }, [location]);

  return (
    <>
      <Link
        to={`/${route}`}
        className={`text-base capitalize ${
          active
            ? "text-gray-800 font-bold dark:text-gray-200"
            : "text-gray-600 dark:text-gray-200 font-normal"
        }`}
      >
     
        {active ? (
          <RoughNotation
            type="highlight"
            multiline={true}
            padding={[0, 2]}
            iterations={1}
            show={true}
            animationDuration={800}
            color={"#F59E0B"}
          >
            {item}
          </RoughNotation>
        ) : (
          <> {item} </>
        )}
      </Link>
    </>
  );
};

export default MenuItem;
