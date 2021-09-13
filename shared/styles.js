import {css, Global} from '@emotion/react'
import emotionNormalize from 'emotion-normalize';
import nextImg from "../public/images/chevron-right.svg";
import prevImg from "../public/images/chevron-left.svg";

export const globalStyles = (
    <Global styles={css`
      ${emotionNormalize}
      * {
        box-sizing: border-box;
        border: none;
        box-shadow: none;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 0;
      }

      body {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
      }

      .swiper-container {
        overflow: visible;
      }

      .swiper-slide {
        width: auto !important;

        &:first-child {
          margin-right: 20px !important;
          margin-left: 31px;
        }
      }

      .swiper-button-prev {
        top: -23px;
        right: 77px;
        left: auto;
        width: 9.17px;
        height: 14px;
        background-image: url(${prevImg.src});
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;

        &:after {
          display: none;
        }
      }

      .swiper-button-next {
        top: -23px;
        right: 40px;

        width: 9.17px;
        height: 14px;

        background-image: url(${nextImg.src});
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;

        &:after {
          display: none;
        }
      }

      .swiper-container.orderLines {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-right: 25px;
        padding-top: 8px;

        .swiper-slide:first-child {
          margin: 0 !important;
        }

        .swiper-slide {
          height: auto;
        }

        .swiper-scrollbar {
          background: none;

          right: 23px;

          .swiper-scrollbar-drag {
            width: 6px;

            background: rgba(0, 0, 0, 0.2);
            border-radius: 33px;
          }
        }
      }


      @media screen and (min-width: 375px) {
        .swiper-slide {
          width: auto !important;

          &:first-child {
            margin-left: 17px;
          }
        }

        .swiper-button-prev {
          right: 56px;
        }

        .swiper-button-next {
          right: 20px;
        }


        .swiper-container.orderLines {
          padding-right: 17px;

          .swiper-scrollbar {

            right: 7px;

            .swiper-scrollbar-drag {
              width: 3px;
            }
          }
        }
      }

      @media screen and (min-width: 992px) {
        .swiper-slide {
          &:first-child {
            margin-left: 30px;
          }
        }

        .swiper-button-prev {
          right: 82px;
        }

        .swiper-button-next {
          right: 45px;
        }

        .swiper-container.orderLines {
          .swiper-scrollbar {
            right: 6px;

            .swiper-scrollbar-drag {
            }
          }
        }
      }

      @media screen and (min-width: 1024px) {
        .swiper-container.orderLines {
          .swiper-scrollbar {
            right: 23px;

            .swiper-scrollbar-drag {
              width: 6px;
              left: 8px;
            }
          }
        }
      }

      input[type='number'] {
        -moz-appearance: textfield;
      }

      input[type='number']::-webkit-outer-spin-button,
      input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      .reset [type="number"] {
        -moz-appearance: spinner-textfield;
      }

      .reset input[type='number']::-webkit-outer-spin-button,
      .reset input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: inner-spin-button;
      }
    `}
    />
)