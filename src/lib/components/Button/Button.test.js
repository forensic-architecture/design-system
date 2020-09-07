import React from "react";
import { shallow } from "enzyme";

import { Button } from "./Button";

describe("<Button />", () => {
  it("should render", () => {
    const wrapper = shallow(<Button label={"Forensic Architecture"} />);

    expect(wrapper).toBeDefined();
  });

  it("should call onClick", () => {
    const props = {
      onClick: jest.fn(),
    };
    const wrapper = shallow(
      <Button label={"Forensic Architecture"} {...props} />
    );
    wrapper.simulate("click");

    expect(props.onClick).toHaveBeenCalled();
  });

  it("should allow custom className", () => {
    const props = {
      className: "Custom",
    };
    const wrapper = shallow(
      <Button label={"Forensic Architecture"} {...props} />
    );

    expect(wrapper.hasClass(props.className)).toBe(true);
  });
});
