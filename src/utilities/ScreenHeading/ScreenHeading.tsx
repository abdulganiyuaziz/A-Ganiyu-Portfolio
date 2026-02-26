import "./ScreenHeading.css";

type ScreenHeadingProps = {
  title: string;
  subHeading: string;
};

const ScreenHeading = ({ title, subHeading }: ScreenHeadingProps) => {
  return (
    <div className="screen-heading-container">
      <h1 className="screen-heading-title">{title}</h1>
      <p className="screen-heading-subtitle">{subHeading}</p>

      <div className="screen-heading-divider">
        <span className="screen-heading-blob" />
      </div>
    </div>
  );
};

export default ScreenHeading;
