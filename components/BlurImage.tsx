import React, { useEffect, useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { getPlaceholderDataURL } from './placeholder'

const BlurImage: React.FC<ImageProps> = (props) => {
    const [isLoading, setLoading] = useState(true)
    const [placeholderDataURL, setPlaceholderDataURL] = useState('')

    useEffect(() => {
        setPlaceholderDataURL(getPlaceholderDataURL(props.width || 32, props.height || 32))
    }, [props.width, props.height])

    return (
        <div style={{ filter: isLoading ? 'blur(20px)' : 'none', transition: 'filter 0.3s ease-out' }}>
            <Image
                {...props}
                alt={props.alt || ''}
                placeholder="blur"
                blurDataURL={placeholderDataURL}
                onLoadingComplete={() => setLoading(false)}
                unoptimized
            />
        </div>
    )
}

export default BlurImage