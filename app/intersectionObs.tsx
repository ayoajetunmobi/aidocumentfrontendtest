"use client"
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef, RefObject, useCallback } from "react"

interface useIntersectionObserverOptions extends IntersectionObserverInit{
    freezeOnceVisible?:boolean;
}

export function useIntersectionObserver({
    threshold = 0.05, // trigers when 5% of element is vissible
    root=null, // Defaults to the browser viewport
    rootMargin = '0px 0px -10% 10px', // Adjusted bottom margin helps mobile scrolling  
    freezeOnceVisible =false                     
}:useIntersectionObserverOptions ={}){
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    // Custom ref cleanup mechanism to support multiple elements safely
    const observerRef = useRef<IntersectionObserver | null>(null);
    const elementRef = useRef<Element | null>(null);

    const ref = useCallback((node: Element | null)=>{
        // Disconnect old observer if element changes
        if(observerRef.current){
            observerRef.current.disconnect();
        }

        elementRef.current = node;

        // Next.js SSR Check: Ensure window/IntersectionObserver exists
        if(typeof window ==="undefined" || !window.IntersectionObserver || !node) return;
        if(freezeOnceVisible && hasBeenVisible) return;
        observerRef.current = new IntersectionObserver(([entry])=>{
            const isElementIntersecting = entry.isIntersecting;
            setIsIntersecting(isElementIntersecting);

            // if(isElementIntersecting){
            //     setHasBeenVisible(true);
            //     if(freezeOnceVisible){
            //         observerRef.current?.disconnect();
            //     }
            // }
        },{threshold, root, rootMargin});
        observerRef.current.observe(node);
    },[threshold, root, rootMargin, freezeOnceVisible, hasBeenVisible])

    useEffect(()=>{
        return()=>{
            if(observerRef.current){
                observerRef.current.disconnect();
            }
        }
    },[])

    return {ref, isIntersecting, hasBeenVisible};
}