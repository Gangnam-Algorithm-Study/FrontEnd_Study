import { RefObject, useEffect } from "react";

type Props = {
  ref: RefObject<HTMLElement> | null;
  callback: () => void;
  rootMargin?: number;
};

/**
 * 인피니티 스크롤링 커스텀 훅스
 */
const useInfiniteScroll = ({ ref, callback, rootMargin = 0 }: Props) => {
  useEffect(() => {
    let io: IntersectionObserver | null = null;

    if (ref?.current) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries?.[0]?.isIntersecting) {
            callback();
          }
        },
        {
          rootMargin: `${rootMargin}px`,
          threshold: 0,
        }
      );

      io.observe(ref.current);
    }

    return function cleanup() {
      if (io) {
        io.disconnect();
      }
    };
  }, [ref, callback, rootMargin]);
};

export default useInfiniteScroll;
