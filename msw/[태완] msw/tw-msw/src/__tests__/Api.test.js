import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import List from "../component/List";

describe("API Test", () => {
  test("GET Test", async () => {
    const { buttonGet } = setUp();
    fireEvent.click(buttonGet);

    const status = screen.getByRole("status");
    await waitFor(() => {
      //렌더링 결과 확인
      expect(status.textContent).toBe("200");
    });

    const statusText = screen.getByRole("alert");
    await waitFor(() => {
      //렌더링 결과 확인
      expect(statusText.textContent).toBe("get");
    });
  });

  test("POST Test", async () => {
    const { buttonPost } = setUp();
    fireEvent.click(buttonPost);

    const status = screen.getByRole("status");
    await waitFor(() => {
      //렌더링 결과 확인
      expect(status.textContent).toBe("201");
    });

    const statusText = screen.getByRole("alert");
    await waitFor(() => {
      //렌더링 결과 확인
      expect(statusText.textContent).toBe("post");
    });
  });

  test("PUT Test", async () => {
    const { buttonPut } = setUp();
    fireEvent.click(buttonPut);

    const status = screen.getByRole("status");
    await waitFor(() => {
      //렌더링 결과 확인
      expect(status.textContent).toBe("200");
    });

    const statusText = screen.getByRole("alert");
    await waitFor(() => {
      //렌더링 결과 확인
      expect(statusText.textContent).toBe("put");
    });
  });

  test("DELETE Test", async () => {
    const { buttonDelete } = setUp();
    fireEvent.click(buttonDelete);

    const status = screen.getByRole("status");
    await waitFor(() => {
      //렌더링 결과 확인
      expect(status.textContent).toBe("200");
    });

    const statusText = screen.getByRole("alert");
    await waitFor(() => {
      //렌더링 결과 확인
      expect(statusText.textContent).toBe("delete");
    });
  });
});

function setUp() {
  render(<List />);

  const buttonGet = screen.getByText("get");
  const buttonPost = screen.getByText("post");
  const buttonPut = screen.getByText("put");
  const buttonDelete = screen.getByText("delete");

  return { buttonGet, buttonPost, buttonPut, buttonDelete };
}
