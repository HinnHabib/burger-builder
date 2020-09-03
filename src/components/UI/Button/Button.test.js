import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("renders button with text", () => {
  const { getByText } = render(<Button disabled>Hello World</Button>);
  const button = getByText("Hello World");
  expect(button).toBeDisabled();
  expect(button).toBeInTheDocument();
});

test("render button snapshot", () => {
  jest.mock("./Button.module.css", () => ({}));
  const { container } = render(
    <Button btnType={"Success"}>Hello World</Button>
  );
  expect(container.firstChild).toMatchSnapshot();
});
