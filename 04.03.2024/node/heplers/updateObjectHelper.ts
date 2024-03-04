
export function updateObject(object:any, data:any) {
    Object.entries(data).forEach(
        ([key, value]) => {
            //@ts-ignore
            if (object[key]!== undefined){
                //@ts-ignore
                object[key] = value
            }
        }
    );
    return object;
}
