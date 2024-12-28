<template>
    <footer :class="{ dark: myStore.isDarkMode }">
        <div class="container">
            <div class="footer__content">
                <div class="footer__logo">
                    <h3>Nature<span>Vibes</span></h3>
                    <h4>Nature’s sounds, your peaceful nights.</h4>
                    <p>Designed to bring the peace of nature closer to you. NatureVibes is your reliable companion
                        for a better soul.</p>
                </div>
                <div class="footer__links">
                    <h3>Links</h3>
                    <NuxtLink to="/">
                        <IconsHome />
                        Home
                    </NuxtLink>
                    <NuxtLink to="/contact">
                        <IconsPhone />
                        Contact Us
                    </NuxtLink>
                    <NuxtLink to="/privacy-policy">
                        <IconsPolicy />
                        Privacy Policy
                    </NuxtLink>
                </div>
                <div class="footer__social">
                    <h3>Follow us</h3>
                    <a href="/" target="_blank">
                        <IconsFacebook />Facebook
                    </a>
                    <a href="/" target="_blank">
                        <IconsInstagram />Instagram
                    </a>
                    <a href="/" target="_blank">
                        <IconsYoutube /> Youtube
                    </a>
                </div>
            </div>
            <h4 class="footer__legal">© 2025 Nature<span>Vibes</span>. All Rights Reserved.</h4>
        </div>
    </footer>
</template>

<script setup>
import { useStore } from '~/store/store';
const myStore = useStore();

</script>

<style scoped lang="scss">
footer {
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.2);
    transition: 0.5s ease-in-out;
    padding-top: 20px;
    height: 230px;
    background: $white;

    .footer__content {
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .footer__logo {
            width: 280px;

            h3 {
                margin-bottom: 10px;

                span {
                    color: $primary;
                }
            }

            h4 {
                font-style: italic;
            }

            p {
                margin-top: 10px;
            }


        }

        .footer__links {
            width: 150px;

            h3 {
                margin-bottom: 10px;
            }

            display: flex;
            flex-direction: column;
            gap: 10px;

            a {
                display: flex;
                align-items: center;
                gap: 5px;
                transition: 0.3s ease;

                svg {
                    width: 25px;
                    transition: 0.3s ease;
                }

                &:hover {
                    color: $primary;

                    svg {
                        fill: $primary ;
                        margin-right: 5px;
                    }
                }
            }


        }

        .footer__social {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 150px;

            h3 {
                margin-bottom: 10px;
            }

            a {
                display: flex;
                align-items: center;
                gap: 5px;
                transition: 0.3s ease;

                svg {
                    width: 25px;
                    transition: 0.3s ease;
                }

                &:hover {
                    color: $primary;

                    svg {
                        fill: $primary ;
                        margin-right: 5px;
                    }
                }
            }
        }

    }

    .footer__legal {
        text-align: center;
        margin-top: 40px;

        span {
            color: $primary;
        }
    }
}


.dark {
    background: transparent !important;

    .footer__content {
        .footer__logo {
            width: 280px;

            h3 {
                color: $white;
            }

            h4 {
                color: $white;
            }

            p {
                color: $white;
            }


        }

        .footer__links {

            h3 {
                color: $white;
            }

            a {
                color: $white;

                svg {
                    fill: $white;
                }
            }
        }

        .footer__social {
            h3 {
                color: $white;
            }

            a {
                color: $white;

                svg {
                    fill: $white ;
                }
            }
        }

    }

    .footer__legal {
        color: $white;

        span {
            color: $primary;
        }
    }
}



/*---------------Media Queries--------------*/
@media (max-width: 767px) {
    footer {
        padding-bottom: 20px;
        height:unset;
        .footer__content {
            flex-direction: column;
            gap: 30px;
            .footer__logo {
                width: unset;
            }

            .footer__links {
                width:unset;
                h3 {
                    margin-bottom: 0px;
                }
                gap: 5px;
            }

            .footer__social {
                gap: 5px;
                width: unset;
                h3 {
                    margin-bottom: 0px;
                }
            }

        }

        .footer__legal {
            margin-top: 20px;
        }
    }
}
</style>