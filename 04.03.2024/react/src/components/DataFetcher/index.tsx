import Heading from "../../components/Heading";
import {useEffect, useState} from "react";
import {User} from "../../types/User.tsx";
interface DataFetcherProps {
    url: string;
}
export default function DataFetcher(url : DataFetcherProps){
    const [items, setItems] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string|null>(null)

    useEffect(() => {
        setLoading(true)
        fetch("http://192.168.56.1:3000/api/users", {method:'GET',headers:{Accept: 'application/json'}})
            .then(response=>response.json() as Promise<User[]>)
            .then(data => {
                setItems(data)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Heading content={'Blog'} />
            {loading
                ? <p>Loading...</p>
                : (error
                        ? <p>{error}</p>
                        : items.map(item => (
                            <div key={item.id}>
                                {Object.entries(item).map(([key, value]) => (
                                    <p key={key}>
                                        <strong>{key}:</strong> {value}
                                    </p>
                                ))}
                            </div>
                        ))
                )
            }
        </div>
    )
}