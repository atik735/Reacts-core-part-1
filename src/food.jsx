export default function Food({dish,price,discount="0%"}) {

    const conDiscount = parseInt(discount)

    if (conDiscount> 5) {
    return(
        <div style={{padding:"10px",margin:"10px",border:"2px solid crimson",borderRadius:"10px", color:"crimson", fontFamily:"sans-serif"}}>
        <li>food : {dish} <br /> price={price} <br /> discount={discount}</li>
        </div>
    )
}

return(
    <div style={{padding:"10px",margin:"10px",border:"2px solid crimson",borderRadius:"10px"}}>
    <li>food : {dish} <br /> price={price} <br /> discount={discount} amr kono discount nei</li>
    </div>
)
}