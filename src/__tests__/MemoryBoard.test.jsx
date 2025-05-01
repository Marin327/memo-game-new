import { render, screen, fireEvent } from "@testing-library/react";
import MemoryBoard from "../components/MemoryBoard";

test("рендърва карти според трудността", () => {
  render(<MemoryBoard setMoves={() => {}} setIsWin={() => {}} isRunning={true} difficulty="easy" />);
  const cards = screen.getAllByText("❓");
  expect(cards.length).toBe(8); 
});