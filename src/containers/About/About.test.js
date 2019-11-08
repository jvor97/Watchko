import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import About from "./About";
import Form from "../Form/Form";

configure({ adapter: new Adapter() });

describe("<About />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  });

  it("should return one <Form /> element", () => {
    expect(wrapper.contains(<Form />)).toEqual(true);
  });
});
