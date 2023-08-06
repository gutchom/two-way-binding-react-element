import type { RefObject } from 'react';
import { useEffect, useRef, useSyncExternalStore } from 'react';

export default function useInput<
  T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>(initialValue?: string): [RefObject<T>, string] {
  const ref = useRef<T>(null);

  function subscribe(callback: () => void) {
    ref.current?.addEventListener('input', callback);

    return () => ref.current?.removeEventListener('input', callback);
  }

  const value = useSyncExternalStore(subscribe, () => ref.current?.value ?? '');

  useEffect(() => {
    if (initialValue && ref.current) ref.current.value = initialValue;
  }, [initialValue]);

  return [ref, value];
}
