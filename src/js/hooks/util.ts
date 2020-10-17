import { useState, useEffect } from "react"

import { getViewportWidth } from "../lib/util.ts"
import {
  PHONE,
  PHONE_WIDTH,
  TABLET,
  TABLET_WIDTH,
  DESKTOP
} from "../lib/constants"

export const useWidth = (): number => {
  const [width, setWidth] = useState(getViewportWidth())

  useEffect(() => {
    const cb = () => {
      setWidth(getViewportWidth())
    }
    window.addEventListener("resize", cb)
    return () => {
      window.removeEventListener("resize", cb)
    }
  }, [])

  return width
}

export const useDeviceCategory = (): string => {
  const width = useWidth()

  if (width <= PHONE_WIDTH) {
    return PHONE
  }
  if (width <= TABLET_WIDTH) {
    return TABLET
  }
  return DESKTOP
}
