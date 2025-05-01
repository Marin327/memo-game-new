import { render, screen } from "@testing-library/react";
import Timer from "../components/Timer";

test("рендърва времето", () => {
  render(<Timer isRunning={false} />);
  expect(screen.getByText(/time:/i)).toBeInTheDocument();
});