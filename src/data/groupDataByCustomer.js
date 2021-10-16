export async function groupDataByCustomer(data,setData) 
{
    const groupData={};
    data.forEach(function(order) {
        const orderJSON={
            "name": order["name"],
            "quantity": order["quantity"],
            "productId": order["productId"],
            "orderId": order["orderId"],
            "status": order["status"],
            "orderDate": order["createdAt"],
        };

        if(groupData.hasOwnProperty(order["customerId"]))
        groupData[order["customerId"]].push(orderJSON);
        else
        groupData[order["customerId"]]=[orderJSON];
      });

      setData(groupData);
}