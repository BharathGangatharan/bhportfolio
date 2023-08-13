import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css'

const ScrollToTop =()=>{

    const [checkScreenPos,setCheckScreenPos] = useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{

            if(window.pageYOffset.toFixed() > 300){
                setCheckScreenPos(true);
            } else {
                setCheckScreenPos(false);
            }
    
        });

    },[]);

    const moveToTop = ()=> {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    }
    return(
        <div>
            {checkScreenPos && <ArrowUpwardIcon onClick={moveToTop} className="bottomToTopIcon" />}
        </div>
    )
}
export default ScrollToTop;