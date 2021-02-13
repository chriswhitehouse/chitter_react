import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from "react-dom/test-utils";

import Form from "../../components/Form";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with Peep as a header title", () => {
    act(() => {
      render(<Form />, container);
    });
    expect(container.textContent).toBe("Peep")
});
