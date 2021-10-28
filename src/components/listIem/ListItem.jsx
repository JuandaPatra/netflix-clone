import React, {useState} from 'react'
import "./listItem.scss"
import {PlayArrow, ThumbUpAltOutlined, ThumbDownAltOutlined, Add} from "@material-ui/icons"


const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://www.youtube.com/watch?v=RMhbr2XQblk"
    return (
        <div className="listItem"
         style={{left : isHovered && index * 225 -50 + index * 2.5}}
         onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
            {isHovered && (
                <>
                <video src={trailer} autoPlay={true} loop/>
                <div className="itemInfo" >
                    <div className="icons">
                        <PlayArrow />
                        <Add />
                        <ThumbUpAltOutlined/>
                        <ThumbDownAltOutlined />
                    </div>
                    <div className="itemInfoTop">
                        <span>1hour 14 mins</span>
                        <span className="limit">+16</span>
                        <span>2020</span>
                    </div>
                    <div className="desc">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero ea atque! Tempore illum quod maiores veniam deserunt voluptatibus provident.</p>
                    </div>
                    <div className="genre">
                        Action
                    </div>
                </div>
                </>
            )}

        </div>
    )
}

export default ListItem
