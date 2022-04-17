import React from 'react';
import Image from 'next/image';
// import type { InferGetStaticPropsType } from 'next';

// export const getStaticProps = async () => {
//    const getPlaiceholder = require('plaiceholder');
//    const { css, img } = await getPlaiceholder('/path-to-your-image.jpg');

//    return {
//       props: {
//          img,
//          css,
//       },
//    };
// };

// create Test with typed props: width, height, src, alt, style, className and aspect ratio

interface ThumborImageType {
   width: number;
   height: number;
   src: string;
   alt?: string;
   layout?: 'intrinsic' | 'fixed' | 'responsive' | 'fill';
   sizes?: string;
   objectFit?:
      | 'contain'
      | 'cover'
      | 'fill'
      | 'none'
      | 'scale-down'
      | 'inherit'
      | 'initial'
      | 'revert'
      | 'unset';
   style?: React.CSSProperties;
   className?: string;
   thumborKey: string;
}

const ThumborImage: React.FC<ThumborImageType> = ({
   width,
   height,
   src,
   alt,
   layout,
   sizes,
   objectFit,
   style,
   className,
   thumborKey,
}) => {
   var Thumbor = require('thumbor');
   var thumbor = new Thumbor(
      thumborKey,
      // '4d7cccbd17064a12dd43021668679f7b488afd55aab1502e0ca8a55f5a8e2c0b',
      process.env.NODE_ENV === 'production'
         ? 'http://13.92.59.236:6969'
         : 'http://192.168.0.69:6969'
   );

   const desiredAspectRatio = height / width;
   const thumborLoader = ({ src, width }: { src: string; width: number }) => {
      return thumbor
         .setImagePath(src)
         .resize(width, Math.round(width * desiredAspectRatio))
         .smartCrop(true)
         .buildUrl();
   };

   const BLUR_MAX_WIDTH = 8;

   return (
      <div
         className={
            typeof className === 'undefined'
               ? 'image-container '
               : 'image-container ' + className
         }
         style={style}
      >
         <Image
            src={src}
            loader={thumborLoader}
            alt={alt ?? ''}
            width={layout === 'fill' ? undefined : width}
            height={layout === 'fill' ? undefined : height}
            objectFit={objectFit ?? 'contain'}
            layout={layout ?? 'intrinsic'}
            sizes={sizes ?? '100vw'}
            blurDataURL={thumbor
               .setImagePath(src)
               .resize(
                  width >= height ? BLUR_MAX_WIDTH : 0,
                  height >= width ? BLUR_MAX_WIDTH : 0
               )
               .buildUrl()}
            placeholder="blur"
         />
      </div>
   );
};

export default ThumborImage;
