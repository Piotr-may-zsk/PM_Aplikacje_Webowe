import DataFetcher from "../../components/DataFetcher";

function Images(){
    return(
        <div>
            <DataFetcher url={"http://localhost:3000/api/images"} cols={["id","name", "path"]} />
        </div>
    )
}

export default Images