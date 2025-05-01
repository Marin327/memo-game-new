import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("рендърва footer", () => {
render(<Footer />);
expect(screen.getByText(/@/i)).toBeInTheDocument();
});