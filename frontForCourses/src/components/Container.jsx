/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-key */

import { useState } from "react";

/* eslint-disable react/prop-types */
function Container({ children }) {
  const [mouseEvent, setMouseEvetn] = useState();

  return (
    <>
      <div className="w-1/2 bg-blue-500 h-50 rounded flex flex-col gap-3">
        <span>Рекомендуемые курсы</span>
        {!!children &&
          children.map((course, index) => (
            <div
              key={course.url + String(index)}
              onMouseEnter={() => setMouseEvetn(course)}
              onMouseLeave={() => setMouseEvetn("")}
              className="relative h-5"
            >
              <div
                key={"scale" + course.url + String(index)}
                style={{ width: `${course.coverage * 100}%` }}
                className="bg-green-500 h-6 absolute z-0"
              ></div>
              <span
                key={"name" + course.url + String(index)}
                className="mx-2 absolute"
              >
                {course.name}
              </span>
            </div>
          ))}
      </div>
      <div className="w-1/2 bg-blue-500 h-50 rounded flex flex-col gap-3">
        <span>Необходимые навыки</span>
        {!mouseEvent &&
          !!children[0].skills &&
          Object.keys(children[0].skills).map((skill, index) => {
            return (
              <div key={skill + String(index)} className="mx-2">
                {skill}
              </div>
            );
          })}
        {!!mouseEvent &&
          Object.entries(mouseEvent.skills).map((skill) => {
            return (
              <div
                key={skill[0]}
                className={skill[1] ? "mx-2 bg-green-500" : "mx-2"}
              >
                {skill[0]}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Container;
