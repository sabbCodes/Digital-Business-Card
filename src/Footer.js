import React from 'react';

function Footer(){
    return (
        <div className='footer'>
            <ul class="social-list">
                <li class="list__item">
                    <a class="list__link" href="https://web.facebook.com/abbas.sarafa.5/">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li class="list__item">
                    <a class="list__link" href="https://wa.me/+2348165999884">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </li>
                <li class="list__item">
                    <a class="list__link" href="https://twitter.com/0lanrewajuAbbas">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="list__item">
                    <a class="list__link" href="https://github.com/sabbCodes">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer