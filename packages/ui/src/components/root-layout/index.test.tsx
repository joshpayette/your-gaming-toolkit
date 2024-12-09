import { describe, it } from "@jest/globals";
import { createRoot } from "react-dom/client";
import { RootLayout } from ".";

describe("RootLayout", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<RootLayout>Hello</RootLayout>);
    root.unmount();
  });
});