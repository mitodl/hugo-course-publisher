import { either, isEmpty, isNil } from "ramda"

export const emptyOrNil = either(isEmpty, isNil)

export const getViewportWidth = () => window.innerWidth
