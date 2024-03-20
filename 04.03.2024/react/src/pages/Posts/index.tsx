import DataFetcher from "../../components/DataFetcher";

function Posts(){
    return(
        <div>
            <DataFetcher url={"http://localhost:3000/api/posts"} cols={["id","title", "content","ownerId", "imageId"]} />
        </div>
    )
}

export default Posts