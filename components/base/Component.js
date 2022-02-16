import React from "react";
import Editorial from "../Editorial"
import RichText from "../RichText"
import Test from "../Test"
import Cta from "../Cta"

const map = {
  editorial: Editorial,
  richText: RichText,
  test: Test,
  cta: Cta
}

export default function Component({ data, type }) {
  const component = map[type];
  if (typeof component !== "undefined") {
    return React.createElement(component, {
      key: data.sys.id,
      data: data
    })
  }

  return null
}