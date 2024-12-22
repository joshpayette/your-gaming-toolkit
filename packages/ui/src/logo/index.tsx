import Image from 'next/image';
import { getImagePath } from '../utils/get-image-path';

export function Logo({ width, height }: { width: number; height: number }) {
  return (
    <Image
      src={getImagePath({ app: 'ygt', path: 'general/logo.png' })}
      alt="Logo of a purple and yellow toolbox."
      width={width}
      height={height}
    />
  );
}
