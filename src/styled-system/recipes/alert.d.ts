/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { Pretty } from '../types/helpers';
import type { DistributiveOmit } from '../types/system-types';

interface AlertVariant {
  
}

type AlertVariantMap = {
  [key in keyof AlertVariant]: Array<AlertVariant[key]>
}

export type AlertVariantProps = {
  [key in keyof AlertVariant]?: ConditionalValue<AlertVariant[key]>
}

export interface AlertRecipe {
  __type: AlertVariantProps
  (props?: AlertVariantProps): string
  raw: (props?: AlertVariantProps) => AlertVariantProps
  variantMap: AlertVariantMap
  variantKeys: Array<keyof AlertVariant>
  splitVariantProps<Props extends AlertVariantProps>(props: Props): [AlertVariantProps, Pretty<DistributiveOmit<Props, keyof AlertVariantProps>>]
}


export declare const alert: AlertRecipe