function Star({fill, desktopwidth, mobilewidth}){
    
    let starWidth = '';
    let starHeight = '';
    window.innerWidth < 768 ? starWidth = "15" : starWidth = "30";
    window.innerWidth < 768 ? starHeight = "15" : starHeight = "30";

    return(
        <>
        
        <svg width={starWidth} height={starHeight} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill={fill}/>
        </svg>
        </>
    )
}
export default Star