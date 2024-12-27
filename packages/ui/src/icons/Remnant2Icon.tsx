import Image from 'next/image';
import { getImagePath } from '../utils/get-image-path';

export function Remnant2Icon({
  width,
  height
}: {
  width: number;
  height: number;
}) {
  return (
    <Image
      src={getImagePath({ app: 'ygt', path: 'icons/remnant-2-icon.png' })}
      width={width}
      height={height}
      alt="A red roman numeral II, the logo for Remnant 2."
    />
  );
}
