import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import MenuDesktop from '../components/MenuDesktop'
import curriculo from './../images/files/curriculum.pdf'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div className='heroSection'>
        <MenuDesktop/>
        <div className='about-hero'>
            <div className='about-hero-content'>
                <h1>Advogadas Familiaristas</h1>
                <h3> Conheça melhor as nossas especialistas em direito de família</h3>
            </div>

            <div className='about-hero-picture'>
                <StaticImage
                src='./../images/advogadas-foto.png'
                width={450}
                quality={100} />
            </div>

        </div>


    <section className='section-about'>
            <div className='section-info'>
                <h2> Vanessa Cupullile</h2>
                <small> OAB 39493430 </small>
            </div>


            <div className='section-wrap'>
                <div className='section-picture'>
                    <StaticImage
                    src='./../images/vanessa-foto.png'
                    />
                </div>

                <div className='section-bio'>
                    <p>Especialistas em direito da famiília, as advogadas Vanessa Cupullile e Thays Medeiros possuem em comum a atenção e o cuidado para lidar com casos </p>
                    <button className='button-about'> <a href={curriculo} title='Curriculo em pdf'> Currículo </a>  </button>
                </div>
            </div>
    </section>


    <section className='section-about'>
           
            {/* <div className='section-info'>
                <h2> Thays Medeiros </h2>
                <small> OAB 39493430 </small>
            </div> */}


            <div className='section-wrap'>
                <div className='section-info'>
                    <h2> Thays Medeiros </h2>
                    <small> OAB 39493430 </small>
                </div>

               

                <div className='section-picture'>
                    <StaticImage
                    src='./../images/thays-foto.png'
                    
                    />
                </div>

                <div className='section-bio'>
                    <p>Especialistas em direito da famiília, as advogadas Vanessa Cupullile e Thays Medeiros possuem em comum a atenção e o cuidado para lidar com casos </p>
                    <button className='button-about'> <a href={curriculo} title='Curriculo em pdf'> Currículo </a>  </button>
                </div>
            </div>

            
    </section>

            <Footer />

    </div>
      
    
  )
}

export default about
