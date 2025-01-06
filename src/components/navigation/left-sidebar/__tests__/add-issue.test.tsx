import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { AddIssue } from "../add-issue";

vi.mock("@/features/add-issue-modal/add-issue-content", () => ({
  AddIssueContent: () => (
    <div data-testid="add-issue-content">Add Issue Modal</div>
  ),
}));

test("Dialog opens when the Create Issue button is clicked", async () => {
  render(<AddIssue />);

  const button = screen.getByTestId("create-issue-button");

  expect(button).toBeInTheDocument();

  await userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByTestId("add-issue-content")).toBeInTheDocument();
  });
});
