import "./index.scss";

interface AnimatedLettersPageProps {
  letterClass: string;
  strArray: string[];
  idx: number;
}

const AnimatedLetters = ({
  letterClass,
  strArray,
  idx,
}: AnimatedLettersPageProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
