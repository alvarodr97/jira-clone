import { useState } from "react";
import styled from "@xstyled/styled-components";
import PropTypes from "prop-types";
import Column from "./Column";
import { reorderQuoteMap } from "../reorder";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { IssueI, IssueStatusEnum } from "@/types/issue";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export interface BoardProps {
  isCombineEnabled: boolean;
  initial: Record<IssueStatusEnum, IssueI[]>;
  useClone?: boolean;
  withScrollableColumns: boolean;
}

const Board = ({
  isCombineEnabled,
  initial,
  useClone,
  withScrollableColumns,
}: BoardProps) => {
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
        <Droppable
          droppableId="board"
          type="COLUMN"
          direction="horizontal"
          isCombineEnabled={isCombineEnabled}
        >
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {ordered.map((key, index) => (
                <Column
                  key={key}
                  index={index}
                  title={key}
                  quotes={columns[key as IssueStatusEnum]}
                  isScrollable={withScrollableColumns}
                  isCombineEnabled={isCombineEnabled}
                  useClone={useClone ?? false}
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

Board.defaultProps = {
  isCombineEnabled: false,
};

Board.propTypes = {
  isCombineEnabled: PropTypes.bool,
};

export default Board;
