import React from "react";
import { useNavigate } from "react-router-dom";
import { DraggableProvided } from "react-beautiful-dnd";
import useBoundStore from "@/store/store";
import styled, { CSSProperties } from "@xstyled/styled-components";
import { borderRadius, grid } from "./constants";
import { IssueI, IssuePriorityColors, IssuePriorityEnum } from "@/types/issue";
import { IconSVG } from "@/components/icon-svg";
import { ISSUES_PRIORITY } from "@/constants/issues-constants";

const getBackgroundColor = (
  issueColor: IssuePriorityEnum,
  isdragging?: string
) => {
  if (isdragging) {
    return lightenColor(IssuePriorityColors[issueColor], 0.8);
  }

  return "#FFFFFF";
};

const getBorderColor = (issueColor: IssuePriorityEnum, isdragging?: string) =>
  isdragging ? IssuePriorityColors[issueColor] : "transparent";

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
  colors: IssuePriorityEnum;
}>`
  border-radius: ${borderRadius}px;
  border: 2px solid transparent;
  border-color: ${(props) => getBorderColor(props.colors, props.isdragging)};
  background-color: ${(props) =>
    getBackgroundColor(props.colors, props.isdragging)};
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

interface QuoteItemProps {
  issue: IssueI;
  isdragging?: string;
  provided: DraggableProvided;
  style?: CSSProperties;
  index?: number;
}

function QuoteItem(props: QuoteItemProps) {
  const navigate = useNavigate();

  const getUserUrl = useBoundStore((state) => state.getUserUrl);
  const { issue, isdragging, provided, style, index } = props;

  const priorityItem = ISSUES_PRIORITY.find(
    (item) => item.priority === issue.priority
  );

  const handleClick = () => {
    navigate(`/project/issue/${issue.id}`);
  };

  return (
    <Container
      onClick={handleClick}
      isdragging={isdragging ?? undefined}
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
          <div className="flex flex-row gap-x-1">
            <IconSVG icon={issue.type} classname="w-6 h-6" />
            <IconSVG
              icon={priorityItem ? priorityItem.icon : "Arrow-Down"}
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
