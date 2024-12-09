import { describe, it } from "@jest/globals";
import { createRoot } from "react-dom/client";
import { Card } from ".";

describe("Card", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    root.render(<Card title="Test Title" href="#">Hello</Card>);
    root.unmount();
  });
});