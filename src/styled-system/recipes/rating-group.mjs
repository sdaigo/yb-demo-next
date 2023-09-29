import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const ratingGroupDefaultVariants = {
  "size": "md"
}
const ratingGroupCompoundVariants = []

const ratingGroupSlotNames = [
  [
    "root",
    "ratingGroup__root"
  ],
  [
    "label",
    "ratingGroup__label"
  ],
  [
    "rating",
    "ratingGroup__rating"
  ],
  [
    "control",
    "ratingGroup__control"
  ]
]
const ratingGroupSlotFns = ratingGroupSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, ratingGroupDefaultVariants, getSlotCompoundVariant(ratingGroupCompoundVariants, slotName))])

const ratingGroupFn = (props = {}) => {
  return Object.fromEntries(ratingGroupSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const ratingGroupVariantKeys = [
  "size"
]

export const ratingGroup = Object.assign(ratingGroupFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: ratingGroupVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, ratingGroupVariantKeys)
  },
})