import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import MainCard from '../components/mainCard/MainCard'

import CardImg1 from '../assets/img/category1-img.png'
import CardImg2 from '../assets/img/category2-img.png'
import CardImg3 from '../assets/img/category3-img.png'
import AboutSection from '../components/aboutSection/AboutSection'

function HomePage(props) {
    return (
        <div>
           <Navbar/>
            <Header/>

                <section className='section category'>
                    <h2 className='section__title'>{props.text} <br /> Category</h2>

                    <div class="category__container container grid">
                        <MainCard src={CardImg1} title="Ghost" description="Choose the ghosts, the scariest there are."/>
                        <MainCard src={CardImg2} title="Pumpkins" description="You look at the scariest pumpkins there is."/>
                        <MainCard src={CardImg3} title="Witch Hat" description="Pick the most stylish witch hats out there."/>
                    </div>
                </section>

            <AboutSection/>
        
            <h2 className='section__title'> Trick Or Treat</h2>
        </div>
    )
}

export default HomePage