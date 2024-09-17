import { normalize } from '@/utils/layout-utils';

type SizesType = typeof sizes;
export type Sizes = keyof typeof sizes;

export const sizes = {
  half: 0.5,
  nano: 1,
  micro: 2,
  semiTiny: 3,
  tiny: 4,
  semiSlim: 5,
  slim: 6,
  mini: 8,
  xSmall: 10,
  small: 12,
  regular: 14,
  mediumPlus: 17,
  medium: 16,
  large: 18,
  xLarge: 20,
  xxLarge: 22,
  big: 24,
  bigPlus: 26,
  huge: 28,
  massive: 30,
  hugeMassive: 32,
  gigantic: 36,
  hugeGigantic: 40,
  hugeGiganticPlus: 47,
  extraGigantic: 50,
  extraHuge: 60,
  full: 999,
};

export const normalizedSizes: SizesType = sizes;
export const normalizedSizesWidth: SizesType = sizes;

for (const size in sizes) {
  if (Object.prototype.hasOwnProperty.call(sizes, size)) {
    normalizedSizes[size as Sizes] = normalize(sizes[size as Sizes], 'height');
    normalizedSizesWidth[size as Sizes] = normalize(
      sizes[size as Sizes],
      'width',
    );
  }
}
