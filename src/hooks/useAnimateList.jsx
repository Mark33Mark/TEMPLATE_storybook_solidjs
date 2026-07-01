import { createEffect, on } from 'solid-js';
import { store } from '../store'; //import your global store instance to track updates

export const useAnimateList = (reactiveListAccessor) => {
    let containerRef;
    const position = new Map();

    // freezes current DOM position right before your state updates
    const prepareFlip = () => {
        if (!containerRef) return;
        const children = containerRef.children;

        position.clear();
        for (const child of children) {
            const id = child.getAttribute('data-id');
            if (id) {
                position.set(id, child.getBoundingClientRect());
            }
        }
    };

    // LAST, INVERT, PLAY: Animate delta shifts via WAAPI compositor
    createEffect(
        on(
            reactiveListAccessor, // track the exact accessor used by your <For> loop
            () => {
                // guard against initial run before elements mount or if map
                if (!containerRef || position.size === 0) return;
                const children = containerRef.children;

                for (const child of children) {
                    const id = child.getAttribute('data-id');
                    if (!id) continue;

                    const firstRect = position.get(id);
                    if (!firstRect) continue;

                    // compute the structural shift delta
                    const lastRect = child.getBoundingClientRect();
                    const deltaY = firstRect.top - lastRect.top;
                    const deltaX = firstRect.left - lastRect.left;

                    if (deltaY !== 0 || deltaX !== 0) {
                        // compound movement and fade pipeline
                        child.animate(
                            [
                                {
                                    transform: `translate(${deltaX}px, ${deltaY}px)`,
                                    opacity: 1, // Start fully visible at old location
                                },
                                {
                                    transform: `translate(${deltaX * 0.5}px, ${deltaY * 0.5}px)`,
                                    opacity: 0.4, // Mid-flight: fade out subtly to look like a shuffle layer
                                },
                                {
                                    transform: 'translate(0px, 0px)',
                                    opacity: 1, // Landing: Fade back to crisp focus state
                                },
                            ],
                            {
                                duration: 1000, // 1000 = 1s
                                easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                                fill: 'none',
                            }
                        );
                    }
                }
                // Clean tracking cache after playing
                position.clear();
            },
            { defer: true } // 4. Prevents running on initial load, only on true updates
        )
    ); // Runs after every DOM commit phase

    return {
        // For SolidJS, you pass the setter/element variable, not an object with a .current property
        setContainer: el => {
            containerRef = el;
        },
        prepareFlip,
    };
};
