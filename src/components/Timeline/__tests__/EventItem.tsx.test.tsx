import { render, screen } from "@testing-library/react";
import { EventItem } from "../EventItem";

const mockEvent = {
  id: "123",
  timestamp: Date.now(),
  content: "Test Event Content",
};

describe("EventItem component", () => {
  it("should render the event content", () => {
    render(<EventItem event={mockEvent} />);
    expect(screen.getByText("Test Event Content")).toBeInTheDocument();
  });
});
