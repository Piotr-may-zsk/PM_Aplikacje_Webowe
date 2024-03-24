import DataFetcher from "../../components/DataFetcher";

function Posts(){
    return(
        <DataFetcher url={"http://localhost:3000/api/posts"} cols={["id","title", "content","ownerId", "imageId"]} dataType={"Posts"} />
    )
}

export default Posts