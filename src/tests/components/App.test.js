import React from "react";
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils";
import App from "../../components/App"

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("ul");
  document.body.appendChild(container);
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("renders peeps data", async () => {
  const fakePeepData = [{ body: "Aye Up!" }, { body: "Howdy!" }];
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakePeepData)
    })
  );

  // Use the asychronous version of act to apply resolved promises
  await act(async () => {
    render(<App />, container);
  });

  expect(container.querySelector("td").textContent).toBe(fakePeepData[0].body)
})
