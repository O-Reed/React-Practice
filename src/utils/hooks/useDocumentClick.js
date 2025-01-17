import { useEffect } from 'react'

const useDocumentClick = () => {

    useEffect(() => {
        const handleDocumentClick = () => {
            console.log("Clicked Document");
        };
        document.addEventListener("click", handleDocumentClick);
        
  return () => {
    <div>useDocumentClick</div>
};
    });

}

export default useDocumentClick