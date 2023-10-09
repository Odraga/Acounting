import React, { Children } from "react";

const Title = ({ children, className }) => {
  return (
    <div className={`d-flex align-items-center col-11 ms-3 ${className}`}>
      <strong>{children}</strong>
    </div>
  );
};

const Header = ({ children, className, onHide, onButtonClose }) => {
  return (
    <>
      <div className={`header row ${className}`}>
        {children}
        {onButtonClose ? (
          <div className="d-flex align-items-center me-3">
            <button onClick={onHide}>Close</button>
          </div>
        ) : null}
      </div>
    </>
  );
};
const Body = ({ children, className }) => {
  return <div className={`body m-3 ${className}`}>{children}</div>;
};

const Footer = ({ children, className }) => {
  return <div className={`footer ${className}`}>{children}</div>;
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
          <div className="overlay"></div>
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
