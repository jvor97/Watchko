import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Form from "./Form";
import Input from "../../components/Input/Input";
import SubmitBtn from "../../components/Buttons/SubmitBtn/SubmitBtn";

configure({ adapter: new Adapter() });

describe("<Form />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />);
  });

  it("should render 4 <Input /> elements", () => {
    expect(wrapper.find(Input)).toHaveLength(4);
  });

  it("should return 1 <SubmitBtn /> element", () => {
    expect(wrapper.find(SubmitBtn)).toHaveLength(1);
  });
  //   it("should return 1 disabled <SubmitBtn /> element", () => {
  //     wrapper.setProps({ valid: false });
  //     expect(wrapper.find(SubmitBtn).attr("disabled")).toEqual(false);
  //   });
  //how to check if subBut is disabled
});
