import DataFetcher from "../../components/DataFetcher";

function AccountData(){
    return(
        <div>
            <DataFetcher url={"http://localhost:3000/api/accountdata"} cols={["id","userId","createdAt", "address","bio"]} dataType={"Account Data"} />
        </div>
    )
}

export default AccountData