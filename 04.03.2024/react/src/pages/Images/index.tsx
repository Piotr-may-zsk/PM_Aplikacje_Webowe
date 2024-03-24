import DataFetcher from "../../components/DataFetcher";

function Images(){
    return(
        <div>
            <DataFetcher url={"http://localhost:3000/api/images"} cols={["id","name", "path"]} dataType={"Images"} />
        </div>
    )
}

export default Images