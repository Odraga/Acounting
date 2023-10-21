import React, { Children } from "react";

const Title = ({ children, className }) => {
  return (
    <div className={`d-flex justify-content-center mt-3 ms-3 ${className}`}>
      <strong>{children}</strong>
    </div>
  );
};

const Header = ({ children, className, onHide, onButtonClose }) => {
  return (
    <>
      <div className={`header ${className}`}>
        {children}
        {onButtonClose ? (
          <div className="d-flex align-items-center justify-content-end me-3">
            <button onClick={onHide}>Close</button>
          </div>
        ) : null}
      </div>
    </>
  );
};
const Body = ({ children, className }) => {
  return <div className={`d-flex body ${className}`}>{children}</div>;
};

const Footer = ({ children, className }) => {
  return <div className={`d-flex footer ${className}`}>{children}</div>;
};

const Modal = ({ children, className, show, onHide }) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Header) {
      return React.cloneElement(child, { onHide: onHide });
    }
    return child;
  });
  return (
    <>
      {show ? (
        <>
          <div className="overlay" onClick={onHide}></div>
          <div className={`modal ${className}`}>{childrenWithProps}</div>
        </>
      ) : null}
    </>
  );
};

Modal.Title = Title;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
