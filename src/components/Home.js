import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigation=useNavigate();
  return (
  <div>
    <div className='flex-item'>
        <div className='card'>
            <img src='https://images.samsung.com/is/image/samsung/ae-uhd-tu8500-ua65tu8500uxzn-frontblack-231854134?$1300_1038_PNG$' className='product-image' alt='tv im'/><br/>
            <label className='product-name'>SAMSUNG TV</label><br/>
            <label className='product-price'><strong>48,000</strong></label><br/>
            <label className='model-name'><strong>65" TU8500</strong> Crystal UHD 4K Flat Smart TV</label><br/>
            <a href='https://www.samsung.com/ae/tvs/uhd-4k-tv/tu8500-43-inch-crystal-uhd-smart-tv-ua43tu8500uxzn/' className='more-details'>more details</a>
            <br/><button className='buttons' onClick={()=>{navigation("/contact")}}>Select</button>
        </div>
        <div className='card'>
            <img src='https://images.samsung.com/is/image/samsung/p6pim/ae/ua65bu8000uxzn/gallery/ae-crystaluhd-bu8000-ua65bu8000uxzn-532001866?$2052_1641_PNG$' className='product-image' alt='tv im'/><br/>
            <label className='product-name'>SAMSUNG TV</label><br/>
            <label className='product-price'><strong>50,000</strong></label><br/>
            <label className='model-name'><strong>65" BU8000</strong> Crystal UHD 4K Smart TV</label><br/>
            <a href='https://www.samsung.com/ae/tvs/uhd-4k-tv/bu8000-65-inch-crystal-uhd-4k-smart-tv-ua65bu8000uxzn/' className='more-details'>more details</a>
            <br/><button className='buttons' onClick={()=>{navigation("/contact")}}>Select</button>
        </div>
        <div className='card'>
            <img src='https://images.samsung.com/is/image/samsung/p6pim/ae/ua55bu8500uxzn/gallery/ae-crystaluhd-bu8500-ua55bu8500uxzn-532001340?$1300_1038_PNG$' className='product-image' alt='tv im'/><br/>
            <label className='product-name'>SAMSUNG TV</label><br/>
            <label className='product-price'><strong>45,000</strong></label><br/>
            <label className='model-name'><strong>55" BU8500</strong> Crystal UHD 4K Smart TV</label><br/>
            <a href='https://www.samsung.com/ae/tvs/uhd-4k-tv/bu8500-55-inch-crystal-uhd-4k-smart-tv-ua55bu8500uxzn/' className='more-details'>more details</a>
            <br/><button className='buttons' onClick={()=>{navigation("/contact")}}>Select</button>
            </div>
        <div className='card'>
            <img src='https://images.samsung.com/is/image/samsung/p6pim/levant/ua65au8100uxtw/gallery/levant-crystal-uhd-au8000-376922-ua65au8100uxtw-409718081?$1300_1038_PNG$' className='product-image' alt='tv im'/><br/>
            <label className='product-name'>SAMSUNG TV</label><br/>
            <label className='product-price'><strong>45,000</strong></label><br/>
            <label className='model-name'><strong>Crystal UHD 4K Smart TV AU8100</strong>s</label><br/>
            <a href='https://www.samsung.com/levant/tvs/uhd-4k-tv/au9000-crystal-uhd-4k-smart-tv-2021-65-inch-ua65au8100uxtw/' className='more-details'>more details</a>
            <br/><button className='buttons' onClick={()=>{navigation("/contact")}}>Select</button>
        </div>
    </div>
    <div className='flex-item'>
        <div className='card'>
            <img src='https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-z-fold4-f936-sm-f936bzadinu-thumb-533084005?$160_160_PNG$' className='product-image' alt='tv im'/><br/>
            <label className='product-name'>SAMSUNG PHONE</label><br/>
            <label className='product-price'><strong>58,000</strong></label><br/>
            <label className='model-name'>Galaxy <strong>Z Fold4</strong></label><br/>
            <a href='https://www.samsung.com/in/smartphones/galaxy-z-fold4/' className='more-details'>more details</a>
            <br/><button className='buttons' onClick={()=>{navigation("/contact")}}>Select</button>
        </div>
        <div className='card'>
            <img src='https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-z-flip4-f721-sm-f721blvainu-thumb-533048783?$160_160_PNG$' className='product-image' alt='tv im'/><br/>
            <label className='product-name'>SAMSUNG PHONE</label><br/>
            <label className='product-price'><strong>55,000</strong></label><br/>
            <label className='model-name'>Galaxy <strong>Z Flip5</strong></label><br/>
            <a href='https://www.samsung.com/in/smartphones/galaxy-z-flip4/buy/' className='more-details'>more details</a>
            <br/><button className='buttons' onClick={()=>{navigation("/contact")}}>Select</button>
        </div>
        <div className='card'>
            <img src='https://images.samsung.com/is/image/samsung/p6pim/in/sm-m135fdbpins/gallery/in-galaxy-m13-sm-m135-431575-sm-m135fdbpins-thumb-533230516?$160_160_PNG$' className='product-image' alt='tv im'/><br/>
            <label className='product-name'>SAMSUNG PHONE</label><br/>
            <label className='product-price'><strong>36,000</strong></label><br/>
            <label className='model-name'>Galaxy <strong>M13 (4GB RAM)</strong></label><br/>
            <a href='https://www.samsung.com/in/smartphones/galaxy-m/galaxy-m13-blue-64gb-sm-m135fdbpins/' className='more-details'>more details</a>
            <br/><button className='buttons' onClick={()=>{navigation("/contact")}}>Select</button>
        </div>
        <div className='card'>
            <img src='https://images.samsung.com/is/image/samsung/p6pim/in/sm-m536bznfinu/gallery/in-galaxy-m53-5g-sm-m536-421705-sm-m536bznfinu-thumb-532474607?$160_160_PNG$' className='product-image' alt='tv im'/><br/>
            <label className='product-name'>SAMSUNG PHONE</label><br/>
            <label className='product-price'><strong>41,000</strong></label><br/>
            <label className='model-name'>Galaxy <strong>M53 5G (8GB RAM)</strong></label><br/>
            <a href='https://www.samsung.com/in/smartphones/galaxy-m/galaxy-m53-5g-brown-128gb-storage-8gm-ram-sm-m536bznfinu/' className='more-details'>more details</a>
            <br/><button className='buttons' onClick={()=>{navigation("/contact")}}>Select</button>
        </div>
    </div>
    </div>
  )
}

export default Home