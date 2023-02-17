import { Image as NativeBaseImage, IImageProps } from 'native-base'

type Props = IImageProps & {
    source: string
    alt: string
    src: string
}

export function Image({source, alt, src, ...rest}: Props) {

    return (
        <NativeBaseImage {...rest}/>
    );
}