import './Heading.css'

type HeadingProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{subtitle}</p>

      <div className="underline">
        <div className="blob"></div>
      </div>
    </div>
  );
};

export default Title;
