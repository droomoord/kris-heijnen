const Course = ({ title, date, children, lastOfArray }) => {
  const description = children.replace(
    /\*(\S*)\*/g,
    '<span class="highlight normalize">$1</span>'
  );

  return (
    <div className="course">
      <div className="course__header">
        <h3 className="course__title">{title}</h3>
        <div className="course__date">{date}</div>
      </div>
      <p
        className="course__description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {lastOfArray ? null : (
        <svg
          width="110"
          height="20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line strokeDasharray="5, 5" x1="0" y1="11" x2="350" y2="11"></line>
        </svg>
      )}
    </div>
  );
};

export default Course;
