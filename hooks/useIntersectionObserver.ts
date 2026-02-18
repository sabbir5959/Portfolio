import { useEffect, RefObject } from 'react'

interface IntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  root?: Element | null
}

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverOptions = {}
): void {
  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(callback, options)
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, callback, options])
} 