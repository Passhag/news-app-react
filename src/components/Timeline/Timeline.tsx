import styled from "styled-components";
import { EventItem } from "./EventItem";

export type Event = {
  id: string;
  timestamp: number;
  content: React.ReactNode;
};

type Props = {
  events: Event[];
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
`;

const ListItem = styled.li`
  position: relative;
  margin-bottom: .5em;
  padding-left: .7em;

  &:not(:last-child):before {
    position: absolute;
    top: 50%;
    left: 0px;
    height: 100%;
    content: "";
    border-left: 1px dashed #878787;
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 0px;
    display: block;
    width: 5px;
    height: 5px;
    content: "";
    background-color: #878787;
    border-radius: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

export const Timeline = ({ events }: Props) => {
  events.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <List>
      {events.map((event) => (
        <ListItem key={event.id}>
          <EventItem event={event} />
        </ListItem>
      ))}
    </List>
  );
};
