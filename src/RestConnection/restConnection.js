export function restCon(payload,method,route)
{
    payload=JSON.stringify(payload);
    return fetch(process.env.REACT_APP_SITE+"/"+route, {
         method: method,
         body: payload,
         headers:{"Content-Type":"application/json"}
        });
}