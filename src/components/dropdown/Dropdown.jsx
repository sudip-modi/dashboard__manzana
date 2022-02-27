import React, { useRef } from "react";
import "./dropdown.css";
const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    console.log("click");
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      console.log(e.target);
      console.log(toggle_ref);
      console.log(content_ref);
      content_ref.current.classList.toggle("active");
    } else {
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};
const Dropdown = (props) => {
  console.log("props");
  console.log(props);
  const dropdown__toggle__el = useRef(null);
  const dropdown__content__el = useRef(null);
  clickOutsideRef(dropdown__content__el, dropdown__toggle__el);

  return (
    <div className="dropdown">
      <button ref={dropdown__toggle__el} className="dropdown__toggle">
        {props.icon ? <i className={props.icon}></i> : ""}
        {props.badge ? (
          <span className="dropdown__toggle-badge">{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>
      <div ref={dropdown__content__el} className="dropdown__content">
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ""}
        {props.renderFooter ? (
          <div className="dropdown__footer">{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
