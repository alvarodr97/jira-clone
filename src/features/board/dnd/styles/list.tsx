import React from "react";
import { Droppable, Draggable, DroppableProvided } from "react-beautiful-dnd";
import styled, { CSSProperties } from "@xstyled/styled-components";
import QuoteItem from "./item";
import Title from "@/features/board/dnd/styles/title";
import { grid } from "./constants";
import { IssueI } from "@/types/issue";

export const getBackgroundColor = (
  isdraggingover: "isdraggingoverTrue" | "isdraggingoverFalse",
  isdraggingfrom: "isdraggingfromTrue" | "isdraggingfromFalse"
) => {
  if (isdraggingover === "isdraggingoverTrue") {
    return "#FFEBE6";
  }
  if (isdraggingfrom === "isdraggingfromTrue") {
    return "#E6FCFF";
  }
  return "#EEEEF2";
};

const Wrapper = styled.div<{
  isdraggingover: "isdraggingoverTrue" | "isdraggingoverFalse";
  isdraggingfrom: "isdraggingfromTrue" | "isdraggingfromFalse";
  isdropdisabled: "isDropDisabledTrue" | "isDropDisabledFalse";
}>`
  background-color: ${(props) =>
    getBackgroundColor(props.isdraggingover, props.isdraggingfrom)};
  display: flex;
  flex-direction: column;
  opacity: ${({ isdropdisabled }) =>
    isdropdisabled === "isDropDisabledTrue" ? 0.5 : "inherit"};
  padding: ${grid}px;
  border: ${grid}px;
  padding-bottom: 0;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  user-select: none;
`;

const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: 50px;
  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  padding-bottom: ${grid}px;
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;

/* stylelint-disable block-no-empty */
const Container = styled.div``;

interface InnerQuoteListProps {
  quotes: IssueI[];
}

const InnerQuoteList = React.memo(function InnerQuoteList(
  props: InnerQuoteListProps
) {
  return props.quotes.map((quote, index) => (
    <Draggable key={quote.id} draggableId={quote.id} index={index}>
      {(dragProvided, dragSnapshot) => (
        <QuoteItem
          key={quote.id}
          index={index}
          issue={quote}
          isdragging={dragSnapshot.isDragging ? "isdraggingTrue" : undefined}
          provided={dragProvided}
        />
      )}
    </Draggable>
  ));
});

interface InnerListProps {
  quotes: IssueI[];
  dropProvided: DroppableProvided;
  title?: string;
}

function InnerList(props: InnerListProps) {
  const { quotes, dropProvided } = props;
  const title = props.title ? <Title title={props.title} /> : null;

  return (
    <Container>
      {title}
      <DropZone ref={dropProvided.innerRef}>
        <InnerQuoteList quotes={quotes} />
        {dropProvided.placeholder}
      </DropZone>
    </Container>
  );
}

interface QuoteListProps {
  ignoreContainerClipping?: boolean;
  internalScroll?: boolean;
  scrollContainerStyle?: CSSProperties;
  isdropdisabled?: boolean;
  listId?: string;
  listType?: string;
  style?: CSSProperties | undefined;
  quotes: IssueI[];
  title?: string;
}

export default function QuoteList(props: QuoteListProps) {
  const {
    ignoreContainerClipping,
    internalScroll,
    scrollContainerStyle,
    isdropdisabled,
    listId = "LIST",
    listType,
    style,
    quotes,
    title,
  } = props;

  return (
    <Droppable
      droppableId={listId}
      type={listType}
      ignoreContainerClipping={ignoreContainerClipping}
      isDropDisabled={isdropdisabled}
    >
      {(dropProvided, dropSnapshot) => (
        <Wrapper
          style={style}
          isdraggingover={
            dropSnapshot.isDraggingOver
              ? "isdraggingoverTrue"
              : "isdraggingoverFalse"
          }
          isdropdisabled={
            isdropdisabled ? "isDropDisabledTrue" : "isDropDisabledFalse"
          }
          isdraggingfrom={
            dropSnapshot.draggingFromThisWith
              ? "isdraggingfromTrue"
              : "isdraggingfromFalse"
          }
          {...dropProvided.droppableProps}
        >
          {internalScroll ? (
            <ScrollContainer style={scrollContainerStyle}>
              <InnerList
                quotes={quotes}
                title={title}
                dropProvided={dropProvided}
              />
            </ScrollContainer>
          ) : (
            <InnerList
              quotes={quotes}
              title={title}
              dropProvided={dropProvided}
            />
          )}
        </Wrapper>
      )}
    </Droppable>
  );
}
