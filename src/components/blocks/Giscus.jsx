'use client'

import { useEffect, useRef } from 'react'

export default function Giscus() {
  const giscusRef = useRef(null)

  useEffect(() => {
    const scriptElement = document.createElement('script')

    scriptElement.src = 'https://giscus.app/client.js'
    scriptElement.async = true
    scriptElement.crossOrigin = 'anonymous'

    scriptElement.setAttribute('data-repo', 'oowtl/jun-blog')
    scriptElement.setAttribute('data-repo-id', 'R_kgDOLr6sLw')
    scriptElement.setAttribute('data-category', 'Comment')
    scriptElement.setAttribute('data-category-id', 'DIC_kwDOLr6sL84Ce6og')
    scriptElement.setAttribute('data-mapping', 'pathname')
    scriptElement.setAttribute('data-strict', '0')
    scriptElement.setAttribute('data-reactions-enabled', '1')
    scriptElement.setAttribute('data-emit-metadata', '0')
    scriptElement.setAttribute('data-input-position', 'top')
    scriptElement.setAttribute('data-theme', 'light')
    scriptElement.setAttribute('data-lang', 'ko')

    giscusRef.current.appendChild(scriptElement)
  }, [])

  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame')
    iframe?.contentWindow?.postMessage('https://giscus.app')
  }, [])
  return <section ref={giscusRef} className="mx-auto mt-4 max-w-3xl" />
}
