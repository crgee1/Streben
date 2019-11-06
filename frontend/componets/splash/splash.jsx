import React from 'react';
import Footer from '../footer/footer';

export default () => {
    return (
        <div className="splash">
            <div className="splash-content">
                <h1>The #1 app for runners and cyclists</h1>
                <img src={window.splashURL} />
            </div>
            <Footer/>
        </div>
        
    )
}
   

