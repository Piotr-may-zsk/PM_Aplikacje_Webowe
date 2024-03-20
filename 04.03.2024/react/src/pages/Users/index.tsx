import DataFetcher from "../../components/DataFetcher";

function Users(){
    return(
        <div>
            <DataFetcher url={"http://localhost:3000/api/users"} cols={["id","createdAt", "email","name"]} />
        </div>
    )
}

export default Users