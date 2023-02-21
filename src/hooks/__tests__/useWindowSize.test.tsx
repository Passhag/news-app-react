import { act, renderHook } from "@testing-library/react";
import { useWindowSize, Size } from "../useWindowSize";

describe("useWindowSize", () => {
  it("should return initial window size", () => {
    let hookResult: Size | undefined;
    renderHook(() => (hookResult = useWindowSize()));

    expect(hookResult?.width).toBeDefined();
    expect(hookResult?.height).toBeDefined();
  });

  it("should return the correct window size when it changes", () => {
    const { result } = renderHook(() => useWindowSize());
    const newWidth = 600;
    const newHeight = 800;

    act(() => {
      window.innerWidth = newWidth;
      window.innerHeight = newHeight;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.width).toEqual(newWidth);
    expect(result.current.height).toEqual(newHeight);
  });
});
