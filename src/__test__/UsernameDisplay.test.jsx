import { describe, it, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UsernameDisplay from "../components/UsernameDisplay";

describe("UsernameDisplay", () => {
  it("should render username", () => {
    const result = render(<UsernameDisplay username="anthony" />);
    // expect(result.container).toMatchSnapshot();
    expect(screen.getByText(/anth/)).toBeInTheDocument();
  });
});
