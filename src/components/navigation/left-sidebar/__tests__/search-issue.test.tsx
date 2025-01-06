import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { SearchIssue } from "../search-issue";

vi.mock("@/features/search/components/search-issue-component", () => ({
  SearchIssueComponent: () => (
    <div data-testid="search-issue-content">Search Issue Panel</div>
  ),
}));

test("Dialog opens when the Search Issue button is clicked", async () => {
  render(<SearchIssue />);

  const button = screen.getByTestId("search-issue-button");

  expect(button).toBeInTheDocument();

  await userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByTestId("search-issue-content")).toBeInTheDocument();
  });
});
