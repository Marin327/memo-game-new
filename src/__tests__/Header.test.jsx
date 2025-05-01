import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("показва заглавие на играта", () => {
  render(<Header />);
  expect(screen.getByText(/memory/i)).toBeInTheDocument();
});