// const importAll = (req: __WebpackModuleApi.RequireContext) => {

//     const object: {[key: string]: string} = {};
//     req.keys().forEach((item: string) => {

//         const key = item.replace('./', '').
//             replace(/_/gu, ' ');
//         object[key] = req(item).default;

//     });
//     return object;

// };

// const toolLogos = importAll(require.context('./', false, /\.(?<image>png|gif)$/u));

// export default toolLogos;

import ds from './ds.png';
import js from './js.png';
import mc from './mc.png';
import mtg from './mtg.png';

const toolLogos: {[key: string]: string} = {
    ds,
    js,
    mc,
    mtg,
};

export default toolLogos;
