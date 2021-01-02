import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("renders results header", () => {
  render(<App />);
  const headerElement = screen.getByText(/results/i);
  expect(headerElement).toBeInTheDocument();
});
it("renders saved properties header", () => {
  render(<App />);
  const headerElement = screen.getByText(/results/i);
  expect(headerElement).toBeInTheDocument();
});
it("renders results properties", () => {
  render(<App />);
  const resultsProperties = screen.getAllByTestId(/results/i);
  expect(resultsProperties.length).toEqual(3);
});
it("renders saved properties", () => {
  render(<App />);
  const savedProperties = screen.getAllByTestId(/saved/i);
  expect(savedProperties.length).toEqual(1);
});

it("renders add/remove property buttons", () => {
  render(<App />);
  const totalProperties =
    screen.getAllByTestId(/results/i).length +
    screen.getAllByTestId(/saved/i).length;
  const buttons = screen.getAllByRole(/button/i);
  expect(buttons.length).toEqual(totalProperties);
});

it("adds saved property on add button click", () => {
  render(<App />);
  const buttons = screen.getAllByText(/add/i);

  buttons.forEach((button) => {
    const savedProperties = screen.getAllByTestId(/saved/i);
    userEvent.click(button);
    const updatedSavedProperties = screen.getAllByTestId(/saved/i);
    expect(updatedSavedProperties.length).toEqual(savedProperties.length + 1);
  });
});
it("removes saved property on remove button click", () => {
  render(<App />);
  const buttons = screen.queryAllByText(/remove/i);

  buttons.forEach((button) => {
    const savedProperties = screen.queryAllByTestId(/saved/i);
    userEvent.click(button);
    const updatedSavedProperties = screen.queryAllByTestId(/saved/i);
    expect(updatedSavedProperties.length).toEqual(savedProperties.length - 1);
  });
});

// only one 'expect' per 'it' block - best practice
// 'describe' block around collection of tests
// regex with case insensitive to check text
// use queryBy when checking if something doesn't exist
