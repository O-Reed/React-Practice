import { useEffect, useState } from "react"

const userApiUrl = 'https://jsonplaceholder.typicode.com/users';
const useFetchUsers = (userId) => {

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {

        const controller = new AbortController();
        setLoading(true);
        fetch(`${userApiUrl}/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
                setError(undefined)
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => setLoading(false));
        return () => {
            controller.abort();
            setLoading(false);
        }
    }, [userId]); // Add userId to the dependency array
    
    return {user: userData, loading, error};
}

export default useFetchUsers