import Image from 'next/image';
import classes from './Logo.module.css';
import { getImagePath } from '@/app/(lib)/get-image-path';
import { Box } from '@mantine/core';
import { Link } from '@/app/(components)/Link';

export function Logo({ width, height }: { width: number; height: number }) {
  return (
    <Link href="/" underline="hover">
      <Box className={classes.container}>
        <Image
          src={getImagePath({ app: 'ygt', path: 'general/logo.png' })}
          alt="Logo of a purple and yellow toolbox."
          width={width}
          height={height}
          loading="eager"
          priority
          className={classes.image}
        />
        <div className={classes.textContainer}>
          <span>YOUR</span>
          <span className={classes.accentText}>GAMING</span>
          <div>
            <span>TOOLKIT</span>
            <span className={classes.dotCom}>.com</span>
          </div>
        </div>
      </Box>
    </Link>
  );
}
