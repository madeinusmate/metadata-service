import { Version } from "./base";
import { CANVAS_FONT_PATH, CANVAS_FALLBACK_FONT_PATH }  from './config';
const fs = require('fs');

export function importFont(font_path: string, media_type: string) {
    const buff = fs.readFileSync(font_path);
    const base64data = buff.toString('base64');
    return `data:${media_type};charset=utf-8;base64,${base64data}`;
}

const fontJakartaBold = importFont(CANVAS_FONT_PATH, 'font/truetype');
const fontDejaVuBold = importFont(CANVAS_FALLBACK_FONT_PATH, 'font/truetype');
// const fontNotoColorEmoji = font2base64.encodeToDataUrlSync(CANVAS_EMOJI_FONT_PATH);

interface SVGTemplateFields {
  backgroundImage?: string;
  domain: string;
  domainFontSize: number;
  isNormalized: boolean;
  isSubdomain: boolean;
  mimeType?: string;
  subdomainText?: string;
  version: Version;
}

export default function createSVGfromTemplate({
  backgroundImage,
  domain,
  domainFontSize,
  isNormalized = true,
  isSubdomain = false,
  mimeType,
  subdomainText,
  version,
}: SVGTemplateFields) {
  return `<svg width="270" height="270" viewBox="0 0 270 270" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${
      backgroundImage
        ? `<defs>
          <pattern id="backImg" patternUnits="userSpaceOnUse" x="0" y="0" width="270" height="270">
            <image href="data:${mimeType};base64,${backgroundImage}" width="270" height="270" />
          </pattern>
        </defs>
        <rect width="270" height="270" fill="url(#backImg)"/>
        <rect width="270" height="270" fill="#000" fill-opacity=".12"/>`
        : isNormalized
          ? `<rect width="270" height="270" fill="url(#paint0_linear)"/>`
          : `<rect width="270" height="270" fill="url(#paint1_linear)"/>`
    }
    <defs>
      <filter id="dropShadow" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="270" width="270">
        <feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity="0.225" width="200%" height="200%"/>
      </filter>
    </defs>
    
    THIS IS THE LOGOOOOOO 




    <g id="g10" transform="translate(25,25)">
      <g id="g12" transform="scale(1)">
        
      
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.71968 27.0628C5.71752 28.0549 5.71751 29.6634 4.71964 30.6555L4.66854 30.7063C3.67067 31.6984 2.05283 31.6984 1.05498 30.7063C0.0571386 29.7142 0.0571539 28.1057 1.05502 27.1136L1.10612 27.0628C2.10399 26.0707 3.72183 26.0707 4.71968 27.0628Z" fill="white" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7322 27.8281C17.7283 28.822 17.7254 30.4305 16.7257 31.4208L9.64789 38.4323C8.64823 39.4226 7.03039 39.4197 6.03434 38.4258C5.03829 37.4319 5.04122 35.8234 6.04088 34.8331L13.1187 27.8216C14.1184 26.8313 15.7362 26.8342 16.7322 27.8281Z" fill="white" fill-opacity="0.6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3385 39.898C27.1213 38.7306 28.7078 38.4151 29.8819 39.1934L30.0352 39.295C31.2094 40.0733 31.5267 41.6506 30.7439 42.8179C29.9611 43.9853 28.3747 44.3008 27.2005 43.5225L27.0472 43.4209C25.873 42.6427 25.5558 41.0654 26.3385 39.898Z" fill="white" fill-opacity="0.3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.2005 26.9103C44.1984 27.9024 44.1984 29.5109 43.2005 30.503L39.7255 33.958C38.7276 34.9501 37.1098 34.9501 36.1119 33.958C35.1141 32.9659 35.1141 31.3574 36.1119 30.3653L39.5869 26.9103C40.5848 25.9182 42.2026 25.9182 43.2005 26.9103Z" fill="white" fill-opacity="0.6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M43.2516 14.1321C44.2494 15.1242 44.2494 16.7327 43.2516 17.7248L17.5722 43.2559C16.5743 44.248 14.9565 44.248 13.9586 43.2559C12.9607 42.2638 12.9607 40.6553 13.9586 39.6632L39.638 14.1321C40.6359 13.14 42.2537 13.14 43.2516 14.1321Z" fill="white" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.3968 6.28216C39.3946 7.27425 39.3946 8.88275 38.3968 9.87485L23.6279 24.5584C22.63 25.5505 21.0122 25.5505 20.0144 24.5584C19.0165 23.5664 19.0165 21.9579 20.0144 20.9658L34.7832 6.28216C35.7811 5.29006 37.3989 5.29006 38.3968 6.28216Z" fill="white" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.6023 1.30176C31.6008 2.29319 31.6019 3.90169 30.6047 4.89445L11.6198 23.7951C10.6227 24.7879 9.00482 24.789 8.00629 23.7976C7.00776 22.8061 7.00668 21.1976 8.00386 20.2049L26.9888 1.30418C27.9859 0.311417 29.6038 0.310335 30.6023 1.30176Z" fill="white" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8006 7.35227C12.7967 8.34607 12.7939 9.95457 11.7944 10.945L4.35883 18.3122C3.35926 19.3025 1.74142 19.2998 0.745284 18.306C-0.250852 17.3122 -0.248067 15.7037 0.751504 14.7133L8.18704 7.34608C9.18661 6.3557 10.8045 6.35847 11.8006 7.35227Z" fill="white" fill-opacity="0.6"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3531 0C17.7643 0 18.9083 1.13738 18.9083 2.54042V2.79446C18.9083 4.19749 17.7643 5.33487 16.3531 5.33487C14.9419 5.33487 13.7979 4.19749 13.7979 2.79446V2.54042C13.7979 1.13738 14.9419 0 16.3531 0Z" fill="white" fill-opacity="0.3"/>
<path d="M55.74 18.58V16.48H59.42C60.38 16.48 61.22 16.2733 61.94 15.86C62.6733 15.4467 63.24 14.8733 63.64 14.14C64.0533 13.3933 64.26 12.5333 64.26 11.56C64.26 10.6 64.0533 9.75333 63.64 9.01999C63.2267 8.28666 62.6533 7.71333 61.92 7.29999C61.2 6.88666 60.3667 6.67999 59.42 6.67999H55.74V4.57999H59.48C60.4933 4.57999 61.4333 4.75999 62.3 5.11999C63.1667 5.46666 63.92 5.95999 64.56 6.59999C65.2133 7.22666 65.72 7.96666 66.08 8.81999C66.44 9.65999 66.62 10.58 66.62 11.58C66.62 12.5667 66.44 13.4867 66.08 14.34C65.72 15.1933 65.22 15.94 64.58 16.58C63.94 17.2067 63.1867 17.7 62.32 18.06C61.4533 18.4067 60.52 18.58 59.52 18.58H55.74ZM54.16 18.58V4.57999H56.46V18.58H54.16Z" fill="white"/>
<path d="M73.1247 18.78C72.1647 18.78 71.298 18.5667 70.5247 18.14C69.7647 17.7 69.158 17.1 68.7047 16.34C68.2647 15.58 68.0447 14.7267 68.0447 13.78C68.0447 12.8333 68.2647 11.9867 68.7047 11.24C69.1447 10.48 69.738 9.87999 70.4847 9.43999C71.2447 8.99999 72.0847 8.77999 73.0047 8.77999C73.898 8.77999 74.6847 8.98666 75.3647 9.39999C76.058 9.81333 76.598 10.38 76.9847 11.1C77.3847 11.82 77.5847 12.64 77.5847 13.56C77.5847 13.72 77.5714 13.8867 77.5447 14.06C77.5314 14.22 77.5047 14.4 77.4647 14.6H69.5847V12.8H76.3247L75.5047 13.52C75.478 12.9333 75.3647 12.44 75.1647 12.04C74.9647 11.64 74.678 11.3333 74.3047 11.12C73.9447 10.9067 73.498 10.8 72.9647 10.8C72.4047 10.8 71.918 10.92 71.5047 11.16C71.0914 11.4 70.7714 11.74 70.5447 12.18C70.318 12.6067 70.2047 13.12 70.2047 13.72C70.2047 14.32 70.3247 14.8467 70.5647 15.3C70.8047 15.7533 71.1447 16.1067 71.5847 16.36C72.0247 16.6 72.5314 16.72 73.1047 16.72C73.598 16.72 74.0514 16.6333 74.4647 16.46C74.8914 16.2867 75.2514 16.0333 75.5447 15.7L76.9447 17.12C76.478 17.6667 75.9114 18.08 75.2447 18.36C74.578 18.64 73.8714 18.78 73.1247 18.78Z" fill="white"/>
<path d="M79.6483 18.58V4.57999H81.9483V18.58H79.6483ZM81.2283 12.58V10.48H88.3483V12.58H81.2283ZM81.2283 6.67999V4.57999H88.6883V6.67999H81.2283Z" fill="white"/>
<path d="M90.6964 18.58V8.97999H92.8964V18.58H90.6964ZM91.7964 7.21999C91.4231 7.21999 91.1097 7.09333 90.8564 6.83999C90.6164 6.58666 90.4964 6.27333 90.4964 5.89999C90.4964 5.52666 90.6164 5.21333 90.8564 4.95999C91.1097 4.70666 91.4231 4.57999 91.7964 4.57999C92.1831 4.57999 92.4964 4.70666 92.7364 4.95999C92.9764 5.21333 93.0964 5.52666 93.0964 5.89999C93.0964 6.27333 92.9764 6.58666 92.7364 6.83999C92.4964 7.09333 92.1831 7.21999 91.7964 7.21999Z" fill="white"/>
<path d="M102.024 18.78C101.011 18.78 100.071 18.6 99.2039 18.24C98.3506 17.8667 97.6039 17.3533 96.9639 16.7C96.3239 16.0333 95.8306 15.2667 95.4839 14.4C95.1372 13.52 94.9639 12.58 94.9639 11.58C94.9639 10.58 95.1372 9.64666 95.4839 8.77999C95.8306 7.89999 96.3239 7.13333 96.9639 6.47999C97.6039 5.82666 98.3506 5.31333 99.2039 4.93999C100.071 4.56666 101.011 4.37999 102.024 4.37999C103.157 4.37999 104.137 4.56666 104.964 4.93999C105.791 5.31333 106.524 5.81999 107.164 6.45999L105.604 8.01999C105.191 7.56666 104.684 7.21333 104.084 6.95999C103.497 6.70666 102.811 6.57999 102.024 6.57999C101.331 6.57999 100.697 6.69999 100.124 6.93999C99.5506 7.17999 99.0506 7.52666 98.6239 7.97999C98.2106 8.41999 97.8906 8.94666 97.6639 9.55999C97.4372 10.1733 97.3239 10.8467 97.3239 11.58C97.3239 12.3133 97.4372 12.9867 97.6639 13.6C97.8906 14.2133 98.2106 14.7467 98.6239 15.2C99.0506 15.64 99.5506 15.98 100.124 16.22C100.697 16.46 101.331 16.58 102.024 16.58C102.877 16.58 103.597 16.4533 104.184 16.2C104.784 15.9333 105.291 15.5733 105.704 15.12L107.264 16.68C106.624 17.3333 105.871 17.8467 105.004 18.22C104.137 18.5933 103.144 18.78 102.024 18.78Z" fill="white"/>
<path d="M115.596 18.58V13.04C115.596 12.4 115.39 11.8733 114.976 11.46C114.576 11.0467 114.056 10.84 113.416 10.84C112.99 10.84 112.61 10.9333 112.276 11.12C111.943 11.3067 111.683 11.5667 111.496 11.9C111.31 12.2333 111.216 12.6133 111.216 13.04L110.356 12.56C110.356 11.8267 110.516 11.18 110.836 10.62C111.156 10.0467 111.596 9.59999 112.156 9.27999C112.73 8.94666 113.37 8.77999 114.076 8.77999C114.796 8.77999 115.436 8.93999 115.996 9.25999C116.556 9.57999 116.996 10.0267 117.316 10.6C117.636 11.16 117.796 11.8133 117.796 12.56V18.58H115.596ZM109.016 18.58V4.17999H111.216V18.58H109.016Z" fill="white"/>
<path d="M124.052 18.78C123.185 18.78 122.399 18.56 121.692 18.12C120.999 17.68 120.445 17.0867 120.032 16.34C119.632 15.58 119.432 14.7333 119.432 13.8C119.432 12.8533 119.632 12.0067 120.032 11.26C120.445 10.5 120.999 9.89999 121.692 9.45999C122.399 9.00666 123.185 8.77999 124.052 8.77999C124.785 8.77999 125.432 8.93999 125.992 9.25999C126.565 9.56666 127.019 9.99333 127.352 10.54C127.685 11.0867 127.852 11.7067 127.852 12.4V15.16C127.852 15.8533 127.685 16.4733 127.352 17.02C127.032 17.5667 126.585 18 126.012 18.32C125.439 18.6267 124.785 18.78 124.052 18.78ZM124.412 16.7C125.225 16.7 125.879 16.4267 126.372 15.88C126.879 15.3333 127.132 14.6333 127.132 13.78C127.132 13.2067 127.019 12.7 126.792 12.26C126.565 11.82 126.245 11.48 125.832 11.24C125.432 10.9867 124.959 10.86 124.412 10.86C123.879 10.86 123.405 10.9867 122.992 11.24C122.592 11.48 122.272 11.82 122.032 12.26C121.805 12.7 121.692 13.2067 121.692 13.78C121.692 14.3533 121.805 14.86 122.032 15.3C122.272 15.74 122.592 16.0867 122.992 16.34C123.405 16.58 123.879 16.7 124.412 16.7ZM126.992 18.58V16L127.372 13.66L126.992 11.34V8.97999H129.192V18.58H126.992Z" fill="white"/>
<path d="M131.653 18.58V8.97999H133.853V18.58H131.653ZM132.753 7.21999C132.38 7.21999 132.067 7.09333 131.813 6.83999C131.573 6.58666 131.453 6.27333 131.453 5.89999C131.453 5.52666 131.573 5.21333 131.813 4.95999C132.067 4.70666 132.38 4.57999 132.753 4.57999C133.14 4.57999 133.453 4.70666 133.693 4.95999C133.933 5.21333 134.053 5.52666 134.053 5.89999C134.053 6.27333 133.933 6.58666 133.693 6.83999C133.453 7.09333 133.14 7.21999 132.753 7.21999Z" fill="white"/>
<path d="M142.901 18.58V13.04C142.901 12.4 142.694 11.8733 142.281 11.46C141.881 11.0467 141.361 10.84 140.721 10.84C140.294 10.84 139.914 10.9333 139.581 11.12C139.248 11.3067 138.988 11.5667 138.801 11.9C138.614 12.2333 138.521 12.6133 138.521 13.04L137.661 12.56C137.661 11.8267 137.821 11.18 138.141 10.62C138.461 10.0467 138.901 9.59999 139.461 9.27999C140.034 8.94666 140.674 8.77999 141.381 8.77999C142.101 8.77999 142.741 8.96666 143.301 9.33999C143.861 9.69999 144.301 10.1733 144.621 10.76C144.941 11.3333 145.101 11.9333 145.101 12.56V18.58H142.901ZM136.321 18.58V8.97999H138.521V18.58H136.321Z" fill="white"/>
<path d="M56.12 39.58V36.82H59.62C60.4733 36.82 61.22 36.6533 61.86 36.32C62.5 35.9733 62.9933 35.4733 63.34 34.82C63.6867 34.1667 63.86 33.3933 63.86 32.5C63.86 31.6067 63.68 30.84 63.32 30.2C62.9733 29.56 62.48 29.0667 61.84 28.72C61.2133 28.3733 60.4733 28.2 59.62 28.2H56.02V25.46H59.66C60.7267 25.46 61.7067 25.6333 62.6 25.98C63.5067 26.3133 64.2933 26.8 64.96 27.44C65.64 28.0667 66.16 28.8133 66.52 29.68C66.8933 30.5333 67.08 31.48 67.08 32.52C67.08 33.5467 66.8933 34.4933 66.52 35.36C66.16 36.2267 65.6467 36.9733 64.98 37.6C64.3133 38.2267 63.5267 38.7133 62.62 39.06C61.7267 39.4067 60.7533 39.58 59.7 39.58H56.12ZM54 39.58V25.46H57.14V39.58H54Z" fill="white"/>
<path d="M73.4781 39.8C72.4781 39.8 71.5715 39.58 70.7581 39.14C69.9581 38.6867 69.3248 38.0733 68.8581 37.3C68.3915 36.5267 68.1581 35.66 68.1581 34.7C68.1581 33.74 68.3915 32.88 68.8581 32.12C69.3248 31.36 69.9581 30.76 70.7581 30.32C71.5581 29.8667 72.4648 29.64 73.4781 29.64C74.4915 29.64 75.3981 29.86 76.1981 30.3C76.9981 30.74 77.6315 31.3467 78.0981 32.12C78.5648 32.88 78.7981 33.74 78.7981 34.7C78.7981 35.66 78.5648 36.5267 78.0981 37.3C77.6315 38.0733 76.9981 38.6867 76.1981 39.14C75.3981 39.58 74.4915 39.8 73.4781 39.8ZM73.4781 37.02C73.9181 37.02 74.3048 36.9267 74.6381 36.74C74.9715 36.54 75.2248 36.2667 75.3981 35.92C75.5848 35.56 75.6781 35.1533 75.6781 34.7C75.6781 34.2467 75.5848 33.8533 75.3981 33.52C75.2115 33.1733 74.9515 32.9067 74.6181 32.72C74.2981 32.52 73.9181 32.42 73.4781 32.42C73.0515 32.42 72.6715 32.52 72.3381 32.72C72.0048 32.9067 71.7448 33.1733 71.5581 33.52C71.3715 33.8667 71.2781 34.2667 71.2781 34.72C71.2781 35.16 71.3715 35.56 71.5581 35.92C71.7448 36.2667 72.0048 36.54 72.3381 36.74C72.6715 36.9267 73.0515 37.02 73.4781 37.02Z" fill="white"/>
<path d="M80.3216 39.58V29.86H83.3816V39.58H80.3216ZM86.5416 39.58V33.9C86.5416 33.4067 86.3882 33.0267 86.0816 32.76C85.7882 32.48 85.4216 32.34 84.9816 32.34C84.6749 32.34 84.4016 32.4067 84.1616 32.54C83.9216 32.66 83.7282 32.8333 83.5816 33.06C83.4482 33.2867 83.3816 33.5667 83.3816 33.9L82.2016 33.38C82.2016 32.6067 82.3682 31.9467 82.7016 31.4C83.0349 30.84 83.4882 30.4133 84.0616 30.12C84.6349 29.8133 85.2816 29.66 86.0016 29.66C86.6816 29.66 87.2882 29.8133 87.8216 30.12C88.3682 30.4267 88.8016 30.8533 89.1216 31.4C89.4416 31.9467 89.6016 32.6 89.6016 33.36V39.58H86.5416ZM92.7616 39.58V33.9C92.7616 33.4067 92.6082 33.0267 92.3016 32.76C92.0082 32.48 91.6416 32.34 91.2016 32.34C90.8949 32.34 90.6216 32.4067 90.3816 32.54C90.1416 32.66 89.9482 32.8333 89.8016 33.06C89.6682 33.2867 89.6016 33.5667 89.6016 33.9L87.8416 33.66C87.8682 32.8333 88.0616 32.1267 88.4216 31.54C88.7949 30.94 89.2816 30.48 89.8816 30.16C90.4949 29.8267 91.1816 29.66 91.9416 29.66C92.6882 29.66 93.3482 29.82 93.9216 30.14C94.5082 30.4467 94.9682 30.8933 95.3016 31.48C95.6482 32.0533 95.8216 32.7467 95.8216 33.56V39.58H92.7616Z" fill="white"/>
<path d="M101.842 39.78C100.949 39.78 100.149 39.56 99.4425 39.12C98.7492 38.68 98.1958 38.08 97.7825 37.32C97.3825 36.56 97.1825 35.6933 97.1825 34.72C97.1825 33.7467 97.3825 32.88 97.7825 32.12C98.1958 31.36 98.7492 30.76 99.4425 30.32C100.149 29.88 100.949 29.66 101.842 29.66C102.496 29.66 103.083 29.7867 103.603 30.04C104.136 30.2933 104.569 30.6467 104.903 31.1C105.236 31.54 105.423 32.0467 105.463 32.62V36.82C105.423 37.3933 105.236 37.9067 104.903 38.36C104.582 38.8 104.156 39.1467 103.623 39.4C103.089 39.6533 102.496 39.78 101.842 39.78ZM102.463 37.02C103.116 37.02 103.642 36.8067 104.042 36.38C104.442 35.94 104.642 35.3867 104.642 34.72C104.642 34.2667 104.549 33.8667 104.362 33.52C104.189 33.1733 103.936 32.9067 103.603 32.72C103.283 32.52 102.909 32.42 102.482 32.42C102.056 32.42 101.676 32.52 101.342 32.72C101.022 32.9067 100.763 33.1733 100.562 33.52C100.376 33.8667 100.283 34.2667 100.283 34.72C100.283 35.16 100.376 35.5533 100.562 35.9C100.749 36.2467 101.009 36.52 101.342 36.72C101.676 36.92 102.049 37.02 102.463 37.02ZM104.522 39.58V36.96L104.982 34.6L104.522 32.24V29.86H107.522V39.58H104.522Z" fill="white"/>
<path d="M109.677 39.58V29.86H112.737V39.58H109.677ZM111.217 28.52C110.737 28.52 110.337 28.36 110.017 28.04C109.71 27.7067 109.557 27.3067 109.557 26.84C109.557 26.36 109.71 25.96 110.017 25.64C110.337 25.32 110.737 25.16 111.217 25.16C111.697 25.16 112.09 25.32 112.397 25.64C112.704 25.96 112.857 26.36 112.857 26.84C112.857 27.3067 112.704 27.7067 112.397 28.04C112.09 28.36 111.697 28.52 111.217 28.52Z" fill="white"/>
<path d="M121.312 39.58V34.04C121.312 33.5333 121.152 33.1267 120.832 32.82C120.525 32.5 120.132 32.34 119.652 32.34C119.319 32.34 119.025 32.4133 118.772 32.56C118.519 32.6933 118.319 32.8933 118.172 33.16C118.025 33.4133 117.952 33.7067 117.952 34.04L116.772 33.46C116.772 32.7 116.939 32.0333 117.272 31.46C117.605 30.8867 118.065 30.4467 118.652 30.14C119.252 29.82 119.925 29.66 120.672 29.66C121.392 29.66 122.025 29.8333 122.572 30.18C123.132 30.5133 123.572 30.96 123.892 31.52C124.212 32.08 124.372 32.6933 124.372 33.36V39.58H121.312ZM114.892 39.58V29.86H117.952V39.58H114.892Z" fill="white"/>
<path d="M129.877 39.82C129.304 39.82 128.737 39.7467 128.177 39.6C127.631 39.4533 127.117 39.2467 126.637 38.98C126.171 38.7 125.771 38.38 125.437 38.02L127.177 36.26C127.497 36.6067 127.877 36.88 128.317 37.08C128.757 37.2667 129.237 37.36 129.757 37.36C130.117 37.36 130.391 37.3067 130.577 37.2C130.777 37.0933 130.877 36.9467 130.877 36.76C130.877 36.52 130.757 36.34 130.517 36.22C130.291 36.0867 129.997 35.9733 129.637 35.88C129.277 35.7733 128.897 35.66 128.497 35.54C128.097 35.42 127.717 35.2533 127.357 35.04C126.997 34.8267 126.704 34.5333 126.477 34.16C126.251 33.7733 126.137 33.2867 126.137 32.7C126.137 32.0733 126.297 31.5333 126.617 31.08C126.937 30.6133 127.391 30.2467 127.977 29.98C128.564 29.7133 129.251 29.58 130.037 29.58C130.864 29.58 131.624 29.7267 132.317 30.02C133.024 30.3 133.597 30.72 134.037 31.28L132.297 33.04C131.991 32.68 131.644 32.4267 131.257 32.28C130.884 32.1333 130.517 32.06 130.157 32.06C129.811 32.06 129.551 32.1133 129.377 32.22C129.204 32.3133 129.117 32.4533 129.117 32.64C129.117 32.84 129.231 33 129.457 33.12C129.684 33.24 129.977 33.3467 130.337 33.44C130.697 33.5333 131.077 33.6467 131.477 33.78C131.877 33.9133 132.257 34.0933 132.617 34.32C132.977 34.5467 133.271 34.8533 133.497 35.24C133.724 35.6133 133.837 36.1067 133.837 36.72C133.837 37.6667 133.477 38.42 132.757 38.98C132.051 39.54 131.091 39.82 129.877 39.82Z" fill="white"/>
      
      
      </g>
    </g>
    ${
      isNormalized
        ? ''
        : `
      <rect x="200" y="34" width="40" height="40" rx="20" fill="white" fill-opacity="0.2"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M217.472 44.4655C218.581 42.5115 221.42 42.5115 222.528 44.4655L230.623 58.7184C231.711 60.6351 230.314 63 228.096 63H211.905C209.686 63 208.289 60.6351 209.377 58.7184L217.472 44.4655ZM221.451 58.6911C221.451 59.0722 221.298 59.4376 221.026 59.7071C220.754 59.9765 220.385 60.1279 220 60.1279C219.615 60.1279 219.246 59.9765 218.974 59.7071C218.702 59.4376 218.549 59.0722 218.549 58.6911C218.549 58.31 218.702 57.9446 218.974 57.6751C219.246 57.4057 219.615 57.2543 220 57.2543C220.385 57.2543 220.754 57.4057 221.026 57.6751C221.298 57.9446 221.451 58.31 221.451 58.6911V58.6911ZM220 47.1968C219.615 47.1968 219.246 47.3482 218.974 47.6177C218.702 47.8871 218.549 48.2526 218.549 48.6336V52.944C218.549 53.325 218.702 53.6905 218.974 53.9599C219.246 54.2294 219.615 54.3807 220 54.3807C220.385 54.3807 220.754 54.2294 221.026 53.9599C221.298 53.6905 221.451 53.325 221.451 52.944V48.6336C221.451 48.2526 221.298 47.8871 221.026 47.6177C220.754 47.3482 220.385 47.1968 220 47.1968Z" fill="white"/>
      <path opacity="0.6" d="M36.791 196V183.947H34.411V196H36.791ZM41.6133 191.189C41.6133 190.22 42.1913 189.455 43.1773 189.455C44.2653 189.455 44.7243 190.186 44.7243 191.121V196H46.9853V190.73C46.9853 188.894 46.0333 187.415 43.9593 187.415C43.0583 187.415 42.0553 187.806 41.5453 188.673V187.636H39.3523V196H41.6133V191.189ZM56.9874 187.636H54.6074L52.6184 193.246L50.5444 187.636H48.0624L51.4794 196H53.7404L56.9874 187.636ZM57.6689 193.722C57.6689 195.031 58.7569 196.238 60.5419 196.238C61.7829 196.238 62.5819 195.66 63.0069 194.997C63.0069 195.32 63.0409 195.779 63.0919 196H65.1659C65.1149 195.711 65.0639 195.116 65.0639 194.674V190.56C65.0639 188.877 64.0779 187.381 61.4259 187.381C59.1819 187.381 57.9749 188.826 57.8389 190.135L59.8449 190.56C59.9129 189.829 60.4569 189.2 61.4429 189.2C62.3949 189.2 62.8539 189.693 62.8539 190.288C62.8539 190.577 62.7009 190.815 62.2249 190.883L60.1679 191.189C58.7739 191.393 57.6689 192.226 57.6689 193.722ZM61.0179 194.555C60.2869 194.555 59.9299 194.079 59.9299 193.586C59.9299 192.94 60.3889 192.617 60.9669 192.532L62.8539 192.243V192.617C62.8539 194.096 61.9699 194.555 61.0179 194.555ZM69.5703 196V183.692H67.3093V196H69.5703ZM74.1358 196V187.636H71.8748V196H74.1358ZM71.6028 184.899C71.6028 185.647 72.2318 186.276 72.9968 186.276C73.7788 186.276 74.3908 185.647 74.3908 184.899C74.3908 184.117 73.7788 183.488 72.9968 183.488C72.2318 183.488 71.6028 184.117 71.6028 184.899ZM84.5322 183.692H82.3052V188.469C82.0672 188.027 81.3872 187.432 79.9422 187.432C77.5792 187.432 75.9302 189.353 75.9302 191.801C75.9302 194.334 77.6302 196.204 80.0102 196.204C81.1322 196.204 81.9822 195.694 82.3562 195.031C82.3562 195.422 82.4072 195.83 82.4412 196H84.6002C84.5662 195.66 84.5322 195.048 84.5322 194.487V183.692ZM78.2082 191.801C78.2082 190.305 79.1262 189.455 80.2822 189.455C81.4382 189.455 82.3392 190.288 82.3392 191.784C82.3392 193.297 81.4382 194.181 80.2822 194.181C79.0922 194.181 78.2082 193.297 78.2082 191.801ZM93.1445 191.189C93.1445 190.22 93.7225 189.455 94.7085 189.455C95.7965 189.455 96.2555 190.186 96.2555 191.121V196H98.5165V190.73C98.5165 188.894 97.5645 187.415 95.4905 187.415C94.5895 187.415 93.5865 187.806 93.0765 188.673V187.636H90.8835V196H93.1445V191.189ZM100.252 193.722C100.252 195.031 101.34 196.238 103.125 196.238C104.366 196.238 105.165 195.66 105.59 194.997C105.59 195.32 105.624 195.779 105.675 196H107.749C107.698 195.711 107.647 195.116 107.647 194.674V190.56C107.647 188.877 106.661 187.381 104.009 187.381C101.765 187.381 100.558 188.826 100.422 190.135L102.428 190.56C102.496 189.829 103.04 189.2 104.026 189.2C104.978 189.2 105.437 189.693 105.437 190.288C105.437 190.577 105.284 190.815 104.808 190.883L102.751 191.189C101.357 191.393 100.252 192.226 100.252 193.722ZM103.601 194.555C102.87 194.555 102.513 194.079 102.513 193.586C102.513 192.94 102.972 192.617 103.55 192.532L105.437 192.243V192.617C105.437 194.096 104.553 194.555 103.601 194.555ZM112.153 196V191.104C112.153 190.186 112.731 189.455 113.717 189.455C114.737 189.455 115.196 190.135 115.196 191.036V196H117.44V191.104C117.44 190.203 118.018 189.455 118.987 189.455C120.024 189.455 120.466 190.135 120.466 191.036V196H122.659V190.577C122.659 188.333 121.18 187.398 119.633 187.398C118.528 187.398 117.644 187.772 116.981 188.792C116.556 187.891 115.638 187.398 114.499 187.398C113.581 187.398 112.51 187.84 112.051 188.656V187.636H109.892V196H112.153ZM126.669 190.866C126.72 190.101 127.366 189.217 128.539 189.217C129.831 189.217 130.375 190.033 130.409 190.866H126.669ZM130.63 193.042C130.358 193.79 129.78 194.317 128.726 194.317C127.604 194.317 126.669 193.518 126.618 192.413H132.602C132.602 192.379 132.636 192.039 132.636 191.716C132.636 189.03 131.089 187.381 128.505 187.381C126.363 187.381 124.391 189.115 124.391 191.784C124.391 194.606 126.414 196.255 128.709 196.255C130.766 196.255 132.092 195.048 132.517 193.603L130.63 193.042Z" fill="white"/>
    `
    }
    ${subdomainText || ''}
    <text
      x="32.5"
      y="231"
      font-size="${domainFontSize}px"
      ${isSubdomain ? 'opacity="0.4"' : ''}
      fill="white"
      filter="url(#dropShadow)">${domain}</text>
    <defs>
      <style type="text/css">
        @font-face { 
          font-family: "Plus Jakarta Sans";
          font-style: normal;
          font-weight: 600 900;
          src: url(${fontJakartaBold});
        }
        @font-face {
          font-family: "DejaVu Sans";
          font-style: normal;
          font-weight: 600 900;
          src: url(${fontDejaVuBold});
        }
      </style>
      <style>
        text {
          font-family: Plus Jakarta Sans, DejaVu Sans, Noto Color Emoji, Apple Color Emoji, sans-serif;
          font-style: normal;
          font-weight: bold;
          line-height: 34px;
        }
      </style>
      <linearGradient id="paint0_linear" x1="190.5" y1="302" x2="-64" y2="-172.5" gradientUnits="userSpaceOnUse">
      ${
        version !== Version.v1w
          ? `<stop stop-color="#FFBCF0"/>
          <stop offset="0.428185" stop-color="#FF8BF3"/>
          <stop offset="1" stop-color="#A099FF"/>`
          : `<stop stop-color="#C1C1C1"/>
        <stop offset="1" stop-color="#4F4F4F"/>`
      }
      </linearGradient>
      <linearGradient id="paint1_linear" x1="0" y1="0" x2="269.553" y2="285.527" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EB9E9E"/>
        <stop offset="1" stop-color="#992222"/>
      </linearGradient>
    </defs>
  </svg>`;
}
