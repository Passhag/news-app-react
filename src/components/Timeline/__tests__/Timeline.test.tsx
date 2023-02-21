import { render, screen } from "@testing-library/react";
import { Timeline } from "../Timeline";

const mockEvents = [
  {
    id: "123",
    timestamp: Date.now() - 10000,
    content: "Test Event Content 1",
  },
  {
    id: "456",
    timestamp: Date.now(),
    content: "Test Event Content 2",
  },
];

describe("Timeline component", () => {
  it("should render a list of events sorted by timestamp", () => {
    render(<Timeline events={mockEvents} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(mockEvents.length);
    expect(items[0]).toHaveTextContent("Test Event Content 2");
    expect(items[1]).toHaveTextContent("Test Event Content 1");
  });
});
