import one from "../assets/images/perfume1.jpg"
import two from "../assets/images/perfume2.jpg"
import three from "../assets/images/perfume3.jpg"

//Product Component

function Product()
{
  return(
    <div className="products">
      <div className="box">
        <img src={one} width={200} height={200}></img>
        <hr></hr>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum velit aliquid quis et iure tempora voluptatem sequi consequuntur, laborum repellat vitae magni distinctio esse perferendis optio quisquam dicta, praesentium harum!</p>
      </div>
      <div className="box">
        <img src={two} width={200} height={200}></img>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt id harum sed corrupti voluptatem aperiam dolores tempore aliquid aut repellat eaque ipsum suscipit repudiandae quasi, doloribus quis accusantium? Fuga.</p>
      </div>
      <div className="box">
        <img src={three} width={200} height={200}></img>
        <hr></hr>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, modi cupiditate accusamus facere expedita labore inventore hic est accusantium dicta nam possimus a eligendi maxime corporis fuga nihil sunt repellendus?</p>
      </div>
    </div>
  )
}

export default Product