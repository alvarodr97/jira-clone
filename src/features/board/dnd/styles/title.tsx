import styled from "@xstyled/styled-components";

const StyledTitle = styled.h4`
  padding: 8px;
  transition: background-color ease 0.2s;
  flex-grow: 1;
  user-select: none;
  position: relative;
`;

interface TitleProps {
  title: string;
  count?: number;
}

const Title: React.FC<TitleProps> = ({ title, count }) => {
  return (
    <StyledTitle className="text-textMedium text-13 uppercase">
      {title} {count}
    </StyledTitle>
  );
};

export default Title;
