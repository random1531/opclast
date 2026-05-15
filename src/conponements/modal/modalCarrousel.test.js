import { render } from "@testing-library/react";
import ModalCaroussel from "./modalCarrousel";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

describe("ModalCaroussel", () => {
  test("vérifie que le bouton close est présent", () => {
    const { container } = render(
      <ModalCaroussel close={jest.fn()} Pictures="/image-test.jpg" />,
    );

    const closeButton = container.querySelector("#closebtn");

    expect(closeButton).toBeInTheDocument();
  });
  test("Présence des fleches de navigation", () => {
    const Pictures = ["/image-test.jpg", "/image-test.jpg"];
    const { container } = render(
      <ModalCaroussel close={jest.fn()} Pictures={Pictures} />,
    );
    const leftArrow = container.querySelector("#arrowleft");
    const rightArrow = container.querySelector("#arrowright");
    expect(leftArrow).toBeInTheDocument();
    expect(rightArrow).toBeInTheDocument();
  });
});
