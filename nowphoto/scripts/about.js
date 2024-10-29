import { createNavbar } from './modules/navbar.mjs';
import { createFooter } from './modules/footer.mjs';
import { createActionButtons } from './modules/actionButtons.mjs';

document.querySelector('header').prepend(createNavbar());
document.querySelector('footer').appendChild(createFooter());
document.body.appendChild(createActionButtons());

let instagramFeed = document.getElementById('instagram-feed');

const instagramFeedHtml = `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/_nowphoto"
                    data-instgrm-version="12">
            <div class="instagram-content">
                <a id="main_link" href="_nowphoto" target="_blank">
                    <div class="instagram-profile">
                        <div class="instagram-avatar"></div>
                        <div class="instagram-text">
                            <div class="instagram-username"></div>
                            <div class="instagram-follow"></div>
                        </div>
                    </div>
                    <div class="instagram-padding"></div>
                    <div class="instagram-logo">
                        <!-- SVG content remains as-is in HTML for easy reference and accessibility -->
                    </div>
                    <div class="instagram-view-text">View this post on Instagram</div>
                    <div class="instagram-padding-large"></div>
                    <div class="instagram-icons">
                        <div class="icon-left">
                            <div class="circle"></div>
                            <div class="rotate-box"></div>
                            <div class="circle-translate"></div>
                        </div>
                        <div class="icon-middle">
                            <div class="circle-large"></div>
                            <div class="triangle"></div>
                        </div>
                        <div class="icon-right">
                            <div class="arrow-top"></div>
                            <div class="rectangle"></div>
                            <div class="arrow-bottom"></div>
                        </div>
                    </div>
                    <div class="instagram-text-content">
                        <div class="instagram-desc-long"></div>
                        <div class="instagram-desc-short"></div>
                    </div>
                </a>
                <p class="instagram-shared-text">
                    <a href="_nowphoto" class="instagram-shared-link" target="_blank">Shared post</a> on
                    <time>Time</time>
                </p>
            </div>
        </blockquote>
`;

// adds the instagram feed html as a child of the instagram feed div
instagramFeed.innerHTML = instagramFeedHtml;