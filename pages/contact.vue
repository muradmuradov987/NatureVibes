<template>
    <div class="contact">
        <img class="contact__bg" src="../public/images/contact-bg.png">
        <div class="container">
            <div class="contact__hero">
                <h1 class="card__title">Get in Touch</h1>
                <p>Have questions? We'd love to hear from you.</p>
            </div>
            <div class="contact__content">
                <form class="contact__form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <button type="submit" class="primary__btn">Send Message</button>
                </form>

                <div class="contact__info">
                    <h3>Contact Information</h3>
                    <p> support@naturevibes.com</p>
                    <p> +1 (100) 123-4567</p>
                    <p>123 Street, City, Country</p>
                    <div class="social__icons">
                        <a href="/">
                            <IconsFacebook />
                        </a>
                        <a href="/">
                            <IconsInstagram />
                        </a>
                        <a href="/">
                            <IconsYoutube />
                        </a>
                    </div>
                    <div class="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.88850536288!2d28.847372731098304!3d41.0054632429878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBJc3RhbmJ1bCBpbGksIFTDvHJraXnJmQ!5e0!3m2!1saz!2saz!4v1743494446206!5m2!1saz!2saz"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.contact {
    min-height: calc(100vh - 310px);
    position: relative;
    padding: 50px 0;
    display: flex;
    align-items: center;
    .contact__bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    .contact__hero {
        text-align: center;
        margin-bottom: 40px;
        z-index: 2;
        position: relative;

        h1 {
            font-size: 36px;
            color: $white;

        }

        p {
            font-size: 18px;
            color: $white;

        }
    }

    .contact__content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
        z-index: 2;
        position: relative;

        .contact__form,
        .contact__info {
            flex: 1;
            min-width: 300px;
            padding: 20px;
        }

        .contact__form {
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(5px);
            border: 1px solid $white;

            .form-group {
                margin-bottom: 15px;

                label {
                    display: block;
                    margin-bottom: 5px;
                    color: $white;

                }

                input,
                textarea {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid $white;
                    border-radius: 5px;
                    font-size: 16px;
                    transition: 0.3s;
                    background: none;
                    color: $white;
                    &:focus {
                        border-color: $primary;
                        outline: none;
                    }
                }

                textarea {
                    height: 120px;
                    resize: none;
                }
            }
        }

        .contact__info {
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(5px);
            border: 1px solid $white;
            padding: 30px;

            h3 {
                font-size: 22px;
                margin-bottom: 20px;
                color: $white;
            }

            p {
                font-size: 16px;
                margin: 10px 0;
                display: flex;
                align-items: center;
                color: $white;
            }

            .social__icons {
                display: flex;
                gap: 10px;
                margin: 20px 0;

                a {
                    width: 30px;

                    svg {
                        fill: $white;
                    }
                }
            }

            .map {
                height: 250px;
                overflow: hidden;
                border-radius: 10px;
                iframe {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>