import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SliderFun(){

  const [sliderRef, setSliderRef] = useState(null);
    const sliderSettings = {
        speed: 250,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true
    }

    const hotelCards = [
        {
          imageSrc:
            'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          title: 'Studio Room',
          description: 'Lorem ipsum dolor sit amet, consectur dolori',
          pricingText: 'USD 50/Day',
          features: ['Free Wifi', 'Free breakfast'],
        },
        {
          imageSrc:
            'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          title: 'Deluxe Room',
          description: 'Lorem ipsum dolor sit amet, consectur dolori',
          pricingText: 'USD 80/Day',
          features: ['Free Wifi', 'Free breakfast'],
        },
        {
          imageSrc:
            'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
          title: 'King Deluxe Room',
          description: 'Lorem ipsum dolor sit amet, consectur dolori',
          pricingText: 'USD 150/Day',
          features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
        },
        {
          imageSrc:
            'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          title: 'Royal Suite',
          description: 'Lorem ipsum dolor sit amet, consectur dolori',
          pricingText: 'USD 299/Day',
          features: [
            'Free Wifi',
            'Free breakfast',
            'Discounted Meals',
            "MacBook for work use (hotel's property)",
          ]
        }
    ]

    return(
        
        <div className="bg-[#ffc700] w-full h-full">
            
            <div className="mt-2">
              <Slider className="" ref={setSliderRef} {...sliderSettings}>
                  
                <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-black">
                    <img className="w-full h-full object-cover"  alt="" src='public/Figma-Store-4050-Edit_600x.webp' />
                </div>
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-black">
                    <img className="w-full h-full object-cover" alt="" src='public/Figma-Store-3215_600x.webp' width="100" height="100" />
                </div>
                <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-black">
                    <img className="w-full h-full object-cover" alt="" src='public/Figma-Store-4136_600x.webp' width="100" height="100" />
                </div>

                <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-black">
                    <img className="w-full h-full object-cover" alt="" src='public/Figma-Store-3814_600x.webp' width="100" height="100" />
                </div>

              </Slider>

            </div>
        </div>
    )
}