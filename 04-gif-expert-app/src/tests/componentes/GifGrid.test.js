import React from "react";
import { GifGrid } from "../../Components/GifGrid";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  let category = "goku";

  test("Debe mostrar correctamente el componente.", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar items cuando se cargan imágnes usando useFetchGifs.", () => {
    const gifs = [
      {
        id: "ABC",
        title: "algun titulo",
        url: "https://localhost.com/algo/img.jpg",
      },
      {
        id: "123",
        title: "algun titulo",
        url: "https://localhost.com/algo/img.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    let wrapper = shallow(<GifGrid category={category} />);
    //expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
