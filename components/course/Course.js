const Course = ({ title, date, children }) => {
  const description = children.replace(
    /\*(\S*)\*/g,
    '<span class="highlight normalize">$1</span>'
  );
  return (
    <div className="course">
      <div className="move-right">
        <h3 className="course__title">{title}</h3>
        <strong className="course__date">{date}</strong>
      </div>
      <p
        className="course__description move-left"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

export default Course;
