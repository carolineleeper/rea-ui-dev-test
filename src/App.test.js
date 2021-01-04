import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

describe("<App />", () => {
  describe("Rendering", () => {
    it("renders results header", () => {
      const headerElement = screen.getByText(/results/i);
      expect(headerElement).toBeInTheDocument();
    });

    it("renders saved properties header", () => {
      const headerElement = screen.getByText(/results/i);
      expect(headerElement).toBeInTheDocument();
    });

    it("renders results properties", () => {
      const resultsProperties = screen.getAllByTestId(/results/i);
      expect(resultsProperties.length).toEqual(3);
    });

    it("renders saved properties", () => {
      const savedProperties = screen.getAllByTestId(/saved/i);
      expect(savedProperties.length).toEqual(1);
    });

    it("renders add/remove property buttons", () => {
      const totalProperties =
        screen.getAllByTestId(/results/i).length +
        screen.getAllByTestId(/saved/i).length;
      const buttons = screen.getAllByRole(/button/i);
      expect(buttons.length).toEqual(totalProperties);
    });
  });

  describe("User Interaction", () => {
    it("adds saved property on add button click", () => {
      const buttons = screen.getAllByText(/add/i);

      buttons.forEach((button) => {
        const savedProperties = screen.getAllByTestId(/saved/i);
        userEvent.click(button);
        const updatedSavedProperties = screen.getAllByTestId(/saved/i);
        expect(updatedSavedProperties.length).toEqual(
          savedProperties.length + 1
        );
      });
    });

    it("removes saved property on remove button click", () => {
      const buttons = screen.queryAllByText(/remove/i);

      buttons.forEach((button) => {
        const savedProperties = screen.queryAllByTestId(/saved/i);
        userEvent.click(button);
        const updatedSavedProperties = screen.queryAllByTestId(/saved/i);
        expect(updatedSavedProperties.length).toEqual(
          savedProperties.length - 1
        );
      });
    });
  });
});
