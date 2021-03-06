import React from 'react'
import allProducts from '../../../assets/image'
import './slider.css'
import Icons from './Icon'
import { Icon } from '@iconify/react';

const Slider = ({updateCategory}) => {
  // let containerSlider
  // useEffect(() => { 
  //   containerSlider = document.querySelector('.containerSlider')
  // }, [])

  const scrollRight = () =>{
    document.querySelector('.containerSlider').scrollLeft += document.querySelector('.containerSlider').offsetWidth
  }
  const scrollLeft = () => {
    document.querySelector('.containerSlider').scrollLeft -= document.querySelector('.containerSlider').offsetWidth
  }

  return (
    <div className="containerArrow">
      <div className="containerSlider">
        {allProducts.map(icon => 
          icon.category === 'icons' ?
        (
            <Icons
              image={icon.img}
              name={icon.name}
              id={icon.id}
              key={icon.id}
              updateCategory={updateCategory}
            />
          ) : null
          )}
      </div>
        <Icon icon="ant-design:double-left-outlined" height="30" className="sliderLeft" id="arrowLeft" onClick={scrollLeft}/>
        <Icon icon="ant-design:double-right-outlined" height="30" className="sliderRight" id="arrowRight" onClick={scrollRight}/>
    </div>
  )
} 

export default Slider
