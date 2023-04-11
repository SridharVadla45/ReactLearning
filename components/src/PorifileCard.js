function ProfileCard({title,handle,image,des}){
  return(
<div>
  <div className=" m-1  flex justify-center items-center max-w-full"> <img  className=" w-full "src= {image} /> </div>
   
   <div><p className="text-left mt-3 font-serif font-extrabold"> {title} </p>
    <p className="text-sm font-extralight text-center font-thin"> 
    {handle} </p></div>

    <hr className="p-1 mt-1 w-4/5 mx-auto"></hr>
    
    <div className="text-start font-serif p-0.5">
        <p>{des}</p>
    </div>
</div>  
  );

}
export default ProfileCard;