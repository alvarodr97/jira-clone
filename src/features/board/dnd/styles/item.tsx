import React from "react";
import { DraggableProvided } from "react-beautiful-dnd";
import useBoundStore from "@/store/store";
import styled, { CSSProperties } from "@xstyled/styled-components";
import { borderRadius, grid } from "./constants";
import { IssueI, IssuePriorityColors, IssuePriorityEnum } from "@/types/issue";
import { IconSVG } from "@/components/icon-svg";

const getBackgroundColor = (
  authorColors: IssuePriorityEnum,
  isdragging?: string,
  isgroupedover?: string | null
) => {
  if (isdragging) {
    return lightenColor(IssuePriorityColors[authorColors], 0.8);
  }

  if (isgroupedover) {
    return "#EBECF0";
  }

  return "#FFFFFF";
};

const getBorderColor = (authorColors: IssuePriorityEnum, isdragging?: string) =>
  isdragging ? IssuePriorityColors[authorColors] : "transparent";

// Hex color to RGB
const hexToRgb = (hex: string) => {
  const hexWithoutHash = hex.replace("#", "");
  const bigint = parseInt(hexWithoutHash, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
};

// Lightening colors
const lightenColor = (hex: string, amount: number) => {
  const { r, g, b } = hexToRgb(hex);

  // Mix with white
  const newR = Math.min(255, Math.round(r + (255 - r) * amount));
  const newG = Math.min(255, Math.round(g + (255 - g) * amount));
  const newB = Math.min(255, Math.round(b + (255 - b) * amount));

  return `rgb(${newR}, ${newG}, ${newB})`;
};

const imageSize = 30;

const Container = styled.a<{
  isdragging?: string;
  isgroupedover?: string | null;
  colors: IssuePriorityEnum;
}>`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${(props) => getBorderColor(props.colors, props.isdragging)};
  background-color: ${(props) =>
    getBackgroundColor(props.colors, props.isdragging, props.isgroupedover)};
  box-shadow: ${({ isdragging }) =>
    isdragging ? `2px 2px 1px #A5ADBA` : "none"};
  box-sizing: border-box;
  padding: ${grid}px;
  min-height: ${imageSize}px;
  margin-bottom: ${grid}px;
  user-select: none;

  /* anchor overrides */
  color: #091e42;

  &:hover,
  &:active {
    color: #091e42;
    text-decoration: none;
  }

  &:focus {
    outline: none;
    border-color: rgba(9, 30, 66, 0.71);
    box-shadow: none;
  }

  display: flex;
`;

const Avatar = styled.img`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 50%;
`;

const Content = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  margin-top: ${grid}px;
  align-items: center;
`;

function getStyle(provided: DraggableProvided, style?: CSSProperties) {
  if (!style) {
    return provided.draggableProps.style;
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  };
}

// Previously this extended React.Component
// That was a good thing, because using React.PureComponent can hide
// issues with the selectors. However, moving it over does can considerable
// performance improvements when reordering big lists (400ms => 200ms)
// Need to be super sure we are not relying on PureComponent here for
// things we should be doing in the selector as we do not know if consumers
// will be using PureComponent

interface QuoteItemProps {
  issue: IssueI;
  isdragging?: string;
  isgroupedover?: string | null;
  provided: DraggableProvided;
  style?: CSSProperties;
  index?: number;
}

function QuoteItem(props: QuoteItemProps) {
  const getUserUrl = useBoundStore((state) => state.getUserUrl);
  const { issue, isdragging, isgroupedover, provided, style, index } = props;

  return (
    <Container
      isdragging={isdragging ?? undefined}
      isgroupedover={isgroupedover ?? undefined}
      colors={issue.priority}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={getStyle(provided, style)}
      data-is-dragging={isdragging}
      data-testid={issue.id}
      data-index={index}
      aria-label={`${issue.id} issue ${issue.title}`}
    >
      <Content>
        <div>{issue.title}</div>
        <Footer className="flex justify-between">
          <div className="flex flex-row items-center gap-x-2">
            <Avatar src={getUserUrl(issue.reporterId)} alt={issue.reporterId} />
            <span className="text-13 text-textMedium uppercase">
              {issue.type} - {issue.id}
            </span>
          </div>
          {/* {index} */}
          <div className="flex flex-row gap-x-1">
            <IconSVG icon={issue.type} classname="w-6 h-6" />
            {/* // TODO: change arrow icons */}
            <IconSVG
              icon={"Arrow-Down"}
              classname="w-6 h-6"
              color={IssuePriorityColors[issue.priority]}
            />
          </div>
        </Footer>
      </Content>
    </Container>
  );
}

export default React.memo(QuoteItem);
