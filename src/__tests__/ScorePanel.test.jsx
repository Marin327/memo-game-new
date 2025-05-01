import { render, screen } from "@testing-library/react";
import ScorePanel  from "../components/ScorePanel";

test("рендърва контрол панел", () => {
    render(<ScorePanel moves={5} />);
    expect(screen.getByText(/moves: 5/i)).toBeInTheDocument();
} );