/* global describe it beforeEach */
import React from "react"
import { expect } from "chai"
import { shallow } from "enzyme"

import { App } from "./"

describe("<App />", () => {
  let wrapper, container

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  describe("render", () => {
    it("content", () => {
      container = wrapper.find(".react-content")

      expect(container.text()).to.equal("react text")
    })
  })
})
