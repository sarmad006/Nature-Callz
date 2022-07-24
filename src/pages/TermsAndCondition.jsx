import React from 'react'
import Footer from '../componenets/FooterSearch/Footer'
import Profile from '../componenets/Profile/Profile'

export default function About(props) {
  return (
    <>
        {/* header */}
        <Profile searchCount={props.searchCount} setSearchCount={props.setSearchCount}/>
        <section className="about-tnc-privacy">
            <h1 className='py-5' style={{textAlign: 'center'}}>Terms and Conditions</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, iure atque? Deserunt, perspiciatis? Dolor accusantium, reprehenderit, neque suscipit delectus corporis aliquid veritatis officia doloremque quos tenetur quas pariatur voluptatibus architecto!</p>
                    </div>
                </div>
            </div>
        </section>

        {/* footer */}
        <Footer />
    </>
  )
}
