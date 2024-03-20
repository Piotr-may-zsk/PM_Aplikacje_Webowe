import DataFetcher from "../../components/DataFetcher";

function Events(){
    return(
        <div>
            <DataFetcher url={"http://localhost:3000/api/events"} cols={["id","date", "name","location"]} />
        </div>
    )
}

export default Events