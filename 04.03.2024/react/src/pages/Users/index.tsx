import DataFetcher from "../../components/DataFetcher";

function Users(){
    return(
        <div>
            <DataFetcher url={"http://localhost:3000/api/users"} />
        </div>
    )
}

export default Users