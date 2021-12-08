const Backdrop = ({ children, clicked }) => {
  return (
    <div className="backdrop" onClick={clicked}>
      {children}
    </div>
  );
};

export default Backdrop;
