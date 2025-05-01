import { render, screen, fireEvent } from "@testing-library/react";
import DifficultySelector from "../components/DifficultySelector";

test("сменя трудността", () => {
  const mockSetDifficulty = jest.fn();
  render(<DifficultySelector setDifficulty={mockSetDifficulty} />);
  fireEvent.change(screen.getByLabelText(/difficulty/i), { target: { value: "hard" } });
  expect(mockSetDifficulty).toHaveBeenCalledWith("hard");
});
