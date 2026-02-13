import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders button text", () => {
  render(<Button>Click</Button>);
  expect(screen.getByRole("button", { name: /click/i })).toBeInTheDocument();
});
