import { useEffect } from 'react'

const useDocumentClick = () => {

    useEffect(() => {
        const handleDocumentClick = () => {
            console.log("Clicked Document");
        };
        document.addEventListener("click", handleDocumentClick);
        
    return () => {
        document.removeEventListener("click", handleDocumentClick);
    }
    })

}

export default useDocumentClick