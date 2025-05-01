import { render, screen } from "@testing-library/react";
import App from "../App";

test("рендърэа главхни компоненти в App", ()=> {
    render(<App />);
    expect(screen.getByText(/moves/i)).toBeIntheDocument();
    expect(screen.getByText(/reset/i)).toBeIntheDocument();
});