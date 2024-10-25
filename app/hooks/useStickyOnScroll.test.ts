import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import useStickyOnScroll from './useStickyOnScroll';

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    value: 0,
  });

  vi.spyOn(document, 'getElementById').mockImplementation((id) => {
    if (id === 'test-element') {
      return {
        offsetTop: 200,
        scrollHeight: 800,
        getBoundingClientRect: () => ({ top: 200 }),
      } as HTMLElement;
    }
    return null;
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useStickyOnScroll', () => {
  it('should return false initially', () => {
    const { result } = renderHook(() => useStickyOnScroll('test-element'));
    expect(result.current).toBe(false);
  });

  it('should set isSticky to true when scrollY is past element offset', async () => {
    const { result } = renderHook(() => useStickyOnScroll('test-element'));

    await act(async () => {
      window.scrollY = 300;
      window.dispatchEvent(new Event('scroll'));
      // Wait for the throttled handler to execute
      await new Promise((resolve) => setTimeout(resolve, 110));
    });

    expect(result.current).toBe(true);
  });

  it('should set isSticky to false when scrollY is less than element offset', async () => {
    const { result } = renderHook(() => useStickyOnScroll('test-element'));

    await act(async () => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
      // Wait for the throttled handler to execute
      await new Promise((resolve) => setTimeout(resolve, 110));
    });

    expect(result.current).toBe(false);
  });

  it('should set isSticky to false when element bottom offset is exceeded', async () => {
    const { result } = renderHook(() => useStickyOnScroll('test-element', 0, 700));

    await act(async () => {
      window.scrollY = 300;
      window.dispatchEvent(new Event('scroll'));
      // Wait for the throttled handler to execute
      await new Promise((resolve) => setTimeout(resolve, 110));
    });

    expect(result.current).toBe(false);
  });

  it('should clean up scroll event listener on unmount', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useStickyOnScroll('test-element'));

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
