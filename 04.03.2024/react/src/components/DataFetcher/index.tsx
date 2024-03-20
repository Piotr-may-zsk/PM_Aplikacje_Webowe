import Heading from "../../components/Heading";
import {useEffect, useState} from "react";
interface DataFetcherProps {
    url: string;
    cols: string[];
}
export default function DataFetcher({url, cols }: DataFetcherProps){
    const [items, setItems] = useState<object[]>([])
    // const [error, setError] = useState<string|null>(null)
    useEffect(() => {
        fetch(url)
            .then(response=>response.json())
            .then((data : object[])=> {
                setItems(data)
            })
    }, [])

    return (
        <div>
            <Heading content={'Blog'} />
            <table>
                <tr>
                    {
                        cols.map(col=>(
                            <th>{col}</th>
                        ))
                    }
                </tr>
                {items.map(item => (
                    <tr key={item.id}>
                        {Object.entries(item).map(([key, value]) => (
                                <td>{value}</td>
                        ))}
                    </tr>
                ))}
            </table>

        </div>
    )
}