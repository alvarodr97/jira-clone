import { DraggableLocation } from "react-beautiful-dnd";
import { IssueI, IssueStatusEnum } from "@/types/issue";

const reorder = (list: IssueI[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

type QuoteMap = {
  [key in IssueStatusEnum]: Array<IssueI>;
};

interface reorderQuoteMapProps {
  quoteMap: QuoteMap;
  source: DraggableLocation;
  destination: DraggableLocation;
}

export const reorderQuoteMap = ({
  quoteMap,
  source,
  destination,
}: reorderQuoteMapProps) => {
  const current = [...quoteMap[source.droppableId as IssueStatusEnum]];
  const next = [...quoteMap[destination.droppableId as IssueStatusEnum]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    const result = {
      ...quoteMap,
      [source.droppableId]: reordered,
    };
    return {
      quoteMap: result,
    };
  }

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  const result = {
    ...quoteMap,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };

  return {
    quoteMap: result,
  };
};
