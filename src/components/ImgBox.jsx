export default function Box({desc,img, alt}) {

    const sx = {
        width:'100%',
        height:'450px'
    }
    return(
        <>
            <div >
                <img src={img} alt={alt} style={sx}/>
            </div>
        </>
    )
}