interface Props {
  title: string;
}

export const Heading: React.FC<Props> = ({title}) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}