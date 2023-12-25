import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightLayout2 from "./rightLayout2";
import RightLayout3 from "./rightLayout3";
import RightLayout4 from "./rightLayout4";
import RightLayout5 from "./rightLayout5";
import RightLayout6 from "./rightLayout6";



const AnimationRightLayout = () => {

    const settings = {
      dots: false,
      infinite: true,
      fade:true,
      speed: 500,
      arrows: false,
      autoplay:true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };

    return (
      
        <Slider {...settings}>
          <RightLayout2 />
          <RightLayout3 />
          <RightLayout4 />
          <RightLayout5 />
          <RightLayout6 />
        </Slider>
     
    );

}



export default AnimationRightLayout;