// const importAll = (req: __WebpackModuleApi.RequireContext) => {

//     const object: {[key: string]: string} = {};
//     req.keys().forEach((item: string) => {

//         const key = item.replace('./', '').
//             replace(/_/gu, ' ');
//         object[key] = req(item).default;

//     });
//     return object;

// };

// const projectImages = importAll(require.context('./', false, /\.(?<image>png|gif)$/u));

// export default projectImages;

import immunity from './immunity.png';
import mtgcr from './mtgcr.png';
import musiq from './musiq.png';
import zps2020 from './zps2020.png';

const projectImages: {[key: string]: string} = {
    immunity,
    mtgcr,
    musiq,
    zps2020,
};

export default projectImages;
