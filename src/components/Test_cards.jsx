
const Test_cards = ({name,content,img}) => {
  return (
    <>
        <div className="cirds cirds-one">
            <div className="part1">
                <img src={img}/>
                    <div className="iner_part">
                    <h4 className="poppins-medium">{name}</h4>
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                    </ul>
                    </div>
            </div>
            <div className="part2">
                <p className="peragraph">{content}</p>
            </div>
        </div>
    </>
  )
}

export default Test_cards