import { RefObject, MutableRefObject, useEffect, useCallback } from 'react';

interface Props<T> {
  refEl: RefObject<T> | MutableRefObject<T> | null | undefined;
  onClick: (e: MouseEvent) => void;
}

export function useOutsideClick<T>({ refEl, onClick }: Props<T>) {
  let handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        // @ts-ignore
        !refEl?.current?.contains(event.target) &&
        typeof onClick === 'function'
      ) {
        onClick(event);
      }
    },
    [onClick, refEl],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
}
