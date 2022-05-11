import React from "react"

export const addPageVmToWindow = (data) => {
  React.useEffect(() => {

    window.pageVm = data.page
    console.log("window.pageVm", window.pageVm);

  }, [])
}