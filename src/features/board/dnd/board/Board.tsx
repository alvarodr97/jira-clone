import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "@xstyled/styled-components";
import Column from "./Column";
import { reorderQuoteMap } from "../reorder";
import { IssueI, IssueStatusEnum } from "@/types/issue";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export interface BoardProps {
  initial: Record<IssueStatusEnum, IssueI[]>;
  withScrollableColumns: boolean;
}

const Board = ({ initial, withScrollableColumns }: BoardProps) => {
  const [columns, setColumns] = useState(initial);
  const ordered = Object.keys(initial);

  const onDragEnd = (result: DropResult) => {
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination,
    });
    setColumns(data.quoteMap);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {ordered.map((key, index) => (
                <Column
                  key={key}
                  index={index}
                  title={key}
                  quotes={columns[key as IssueStatusEnum]}
                  isScrollable={withScrollableColumns}
                />
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Board;
