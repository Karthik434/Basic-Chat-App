import { useEffect, useRef } from "react";

function useChatScroll(dep: any) {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const scrollToBottom = () => {
            if (ref.current) {
                console.log('Scrolling...', {
                    scrollHeight: ref.current.scrollHeight,
                    clientHeight: ref.current.clientHeight,
                    scrollTop: ref.current.scrollTop
                });
                
                ref.current.scrollTop = ref.current.scrollHeight;
                
                console.log('After scroll:', ref.current.scrollTop);
            } else {
                console.log('ref.current is null');
            }
        };
        
        const timeoutId = setTimeout(scrollToBottom, 100);
        return () => clearTimeout(timeoutId);
    }, [dep]);
    
    return ref;
}

export default useChatScroll;