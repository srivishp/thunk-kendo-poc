import React from "react";
import { render } from "@testing-library/react";
import Home from "./Users";

describe("Home Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<Home />);
    expect(getByText("A Thunk & Kendo React POC")).toMatchInlineSnapshot(`
      <h2>
      A Thunk & Kendo React POC
      </h2>
    `);
  });
});
