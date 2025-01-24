const AddToCart = (props) => {

    console.log("pop valu:",props.pop);
    

    return (
<div className="add-to-cart-wrapper">
<div className="add-to-cart-item">
    

    <img src={props.pop} alt="" width={200} height={200} className="br-10" />
    <h6>{props.pop2} </h6>
</div>

</div>
    )
}

export default AddToCart