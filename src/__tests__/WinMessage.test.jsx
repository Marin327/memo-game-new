import { render, screen } from "@testing-library/react";
import WinMessage from "../components/WinMessage";

test("показва съобщенията при победа", () => {
    render(<WinMessage isWin={true}/>);
    expect(screen.getByText(/you win/i)).toBeInTheDocument();
});