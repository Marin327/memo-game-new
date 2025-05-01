import { render, screen, fireEvent } from "@testing-library/react";
import ResetButton from "../components/ResetButton";

test("показва рестартиране на бутона при клик", () => {
const mockReset = jest.fn();
render(<ResetButton onReset={mockReset} />);
fireEvent.click(screen.getByText(/rest/i));
expect(mockReset).toHaveBeenCalled();
});