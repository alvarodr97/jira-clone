import { Draggable } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";
import QuoteList from "../styles/list";
import Title from "../styles/title";
import { grid, borderRadius } from "../styles/constants";
import { IssueI, IssueStatusDisplay, IssueStatusEnum } from "@/types/issue";

const Container = styled.div`
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: #ebecf0;
`;

interface ColumnProps {
  key: string;
  index: number;
  title: string;
  quotes: IssueI[];
  isScrollable: boolean;
}

const Column = (props: ColumnProps) => {
  const title = props.title;
  const quotes = props.quotes;
  const index = props.index;
  return (
    <Draggable draggableId={title} index={index} isDragDisabled>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Header>
            <Title
              title={IssueStatusDisplay[title as IssueStatusEnum]}
              count={quotes.length}
              aria-label={`${title} quote list`}
            />
          </Header>
          <QuoteList
            listId={title}
            listType="QUOTE"
            style={{
              backgroundColor: snapshot.isDragging ? "#E3FCEF" : undefined,
            }}
            quotes={quotes}
            internalScroll={props.isScrollable}
          />
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
