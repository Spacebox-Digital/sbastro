import { parse } from 'node-html-parser'

export const flatListToHierarchical = (
    data = [],
    {idKey='key',parentKey='parentId',childrenKey='children'} = {}
) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const newItem = {...item};
        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId
            ? (
                childrenOf[parentId] = childrenOf[parentId] || []
            ).push(newItem)
            : tree.push(newItem);
    });
    return tree;
};

export function slugify(string) {
    // // console.log string', string)

    const a =
        'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b =
        'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}

export const parseHTML = (HTMLString, classString = '') => {
    if (!HTMLString) return null

    const root = parse(HTMLString)
    let paragraphs
    let h2s = []
    let h3s = []
    let images = []

    if (root) {
        paragraphs = root.querySelectorAll('p')

        // if (classString === '') {

        //     paragraphs.forEach(function(p, i, paragraphs){
        //         if (i + 1 === paragraphs.length){
        //             p.setAttribute('class', 'mb-0 font-normal')
        //         } else {
        //             p.setAttribute('class', 'mb-3 font-normal')
        //         }
        //     });
        // } else {
        //     paragraphs.forEach((p) => {
        //         p.setAttribute('class', classString)
        //     });
        // }

        h2s = root.querySelectorAll('h2')
        h2s.forEach((h2) => {
            h2.setAttribute('class', classString)
        })

        h3s = root.querySelectorAll('h3')
        h3s.forEach((h3) => {
            h3.setAttribute('class', classString)
        })

        images = root.querySelectorAll('img')
        images.forEach((img) => {
            img.setAttribute('class', 'w-full h-auto')
        })
    }

    return root

}

export const sbTextColors = {
    '#059371': 'text-sb-green-550',
    '#048264': 'text-sb-green-600',
    '#047258': 'text-sb-green-650',
    '#03624b': 'text-sb-green-700',
    '#03523f': 'text-sb-green-750',
    '#024132': 'text-sb-green-800',
    '#013125': 'text-sb-green-850',
    '#012119': 'text-sb-green-900',
    '#00100c': 'text-sb-green-950',
    '#05a37d': 'text-sb-green-500',
    '#05a37d': 'text-sb-green',
    '#1eac8a': 'text-sb-green-450',
    '#37b597': 'text-sb-green-400',
    '#50bfa4': 'text-sb-green-350',
    '#69c8b1': 'text-sb-green-300',
    '#82d1be': 'text-sb-green-250',
    '#9bdacb': 'text-sb-green-200',
    '#b4e3d8': 'text-sb-green-150',
    '#cdede5': 'text-sb-green-100',
    '#e6f6f2': 'text-sb-green-50:' ,
    '#c2e812': 'text-sb-pear',
    '#afd110': 'text-sb-pear-550',
    '#9bba0e': 'text-sb-pear-600',
    '#88a20d': 'text-sb-pear-650',
    '#748b0b': 'text-sb-pear-700',
    '#617409': 'text-sb-pear-750',
    '#4e5d07': 'text-sb-pear-800',
    '#3a4605': 'text-sb-pear-850',
    '#272e04': 'text-sb-pear-900',
    '#131702': 'text-sb-pear-950',
    '#c2e812': 'text-sb-pear-500',
    '#c8ea2a': 'text-sb-pear-450',
    '#ceed41': 'text-sb-pear-400',
    '#d4ef59': 'text-sb-pear-350',
    '#daf171': 'text-sb-pear-300',
    '#e1f489': 'text-sb-pear-250',
    '#e7f6a0': 'text-sb-pear-200',
    '#edf8b8': 'text-sb-pear-150',
    '#f3fad0': 'text-sb-pear-100',
    '#f9fde7': 'text-sb-pear-50',
    '#f4d06f': 'text-sb-jasmine',
    '#dcbb64': 'text-sb-jasmine-550',
    '#c3a659': 'text-sb-jasmine-600',
    '#ab924e': 'text-sb-jasmine-650',
    '#927d43': 'text-sb-jasmine-700',
    '#7a6838': 'text-sb-jasmine-750',
    '#62532c': 'text-sb-jasmine-800',
    '#493e21': 'text-sb-jasmine-850',
    '#312a16': 'text-sb-jasmine-900',
    '#18150b': 'text-sb-jasmine-950',
    '#f4d06f': 'text-sb-jasmine-500',
    '#f5d57d': 'text-sb-jasmine-450',
    '#f6d98c': 'text-sb-jasmine-400',
    '#f7de9a': 'text-sb-jasmine-350',
    '#f8e3a9': 'text-sb-jasmine-300',
    '#fae8b7': 'text-sb-jasmine-250',
    '#fbecc5': 'text-sb-jasmine-200',
    '#fcf1d4': 'text-sb-jasmine-150',
    '#fdf6e2': 'text-sb-jasmine-100',
    '#fefaf1': 'text-sb-jasmine-50',
    '#f49d6e': 'text-sb-tangerine',
    '#dc8d63': 'text-sb-tangerine-550',
    '#c37e58': 'text-sb-tangerine-600',
    '#ab6e4d': 'text-sb-tangerine-650',
    '#925e42': 'text-sb-tangerine-700',
    '#7a4f37': 'text-sb-tangerine-750',
    '#623f2c': 'text-sb-tangerine-800',
    '#492f21': 'text-sb-tangerine-850',
    '#311f16': 'text-sb-tangerine-900',
    '#18100b': 'text-sb-tangerine-950',
    '#f49d6e': 'text-sb-tangerine-500',
    '#f5a77d': 'text-sb-tangerine-450',
    '#f6b18b': 'text-sb-tangerine-400',
    '#f7ba9a': 'text-sb-tangerine-350',
    '#f8c4a8': 'text-sb-tangerine-300',
    '#faceb7': 'text-sb-tangerine-250',
    '#fbd8c5': 'text-sb-tangerine-200',
    '#fce2d4': 'text-sb-tangerine-150',
    '#fdebe2': 'text-sb-tangerine-100',
    '#fef5f1': 'text-sb-tangerine-50',
    '#ff4e00': 'text-sb-orange',
    '#e64600': 'text-sb-orange-550',
    '#cc3e00': 'text-sb-orange-600',
    '#b33700': 'text-sb-orange-650',
    '#992f00': 'text-sb-orange-700',
    '#802700': 'text-sb-orange-750',
    '#661f00': 'text-sb-orange-800',
    '#4c1700': 'text-sb-orange-850',
    '#331000': 'text-sb-orange-900',
    '#190800': 'text-sb-orange-950',
    '#ff4e00': 'text-sb-orange-500',
    '#ff601a': 'text-sb-orange-450',
    '#ff7133': 'text-sb-orange-400',
    '#ff834d': 'text-sb-orange-350',
    '#ff9566': 'text-sb-orange-300',
    '#ffa780': 'text-sb-orange-250',
    '#ffb899': 'text-sb-orange-200',
    '#ffcab3': 'text-sb-orange-150',
    '#ffdccc': 'text-sb-orange-100',
    '#ffede6': 'text-sb-orange-50',
    '#f7d6e0': 'text-sb-pink',
    '#dec1ca': 'text-sb-pink-550',
    '#c6abb3': 'text-sb-pink-600',
    '#ad969d': 'text-sb-pink-650',
    '#948086': 'text-sb-pink-700',
    '#7c6b70': 'text-sb-pink-750',
    '#63565a': 'text-sb-pink-800',
    '#4a4043': 'text-sb-pink-850',
    '#312b2d': 'text-sb-pink-900',
    '#191516': 'text-sb-pink-950',
    '#f7d6e0': 'text-sb-pink-500',
    '#f8dae3': 'text-sb-pink-450',
    '#f9dee6': 'text-sb-pink-400',
    '#f9e2e9': 'text-sb-pink-350',
    '#fae6ec': 'text-sb-pink-300',
    '#fbebf0': 'text-sb-pink-250',
    '#fceff3': 'text-sb-pink-200',
    '#fdf3f6': 'text-sb-pink-150',
    '#fdf7f9': 'text-sb-pink-100',
    '#fefbfc': 'text-sb-pink-50',
    '#5bc0eb': 'text-sb-aero-blue',
    '#52add4': 'text-sb-aero-blue-550',
    '#499abc': 'text-sb-aero-blue-600',
    '#4086a5': 'text-sb-aero-blue-650',
    '#37738d': 'text-sb-aero-blue-700',
    '#2e6076': 'text-sb-aero-blue-750',
    '#244d5e': 'text-sb-aero-blue-800',
    '#1b3a46': 'text-sb-aero-blue-850',
    '#12262f': 'text-sb-aero-blue-900',
    '#091317': 'text-sb-aero-blue-950',
    '#5bc0eb': 'text-sb-aero-blue-500',
    '#6bc6ed': 'text-sb-aero-blue-450',
    '#7ccdef': 'text-sb-aero-blue-400',
    '#8cd3f1': 'text-sb-aero-blue-350',
    '#9dd9f3': 'text-sb-aero-blue-300',
    '#ade0f5': 'text-sb-aero-blue-250',
    '#bde6f7': 'text-sb-aero-blue-200',
    '#ceecf9': 'text-sb-aero-blue-150',
    '#def2fb': 'text-sb-aero-blue-100',
    '#eff9fd': 'text-sb-aero-blue-50',
    '#284b63': 'text-sb-indigo',
    '#244459': 'text-sb-indigo-550',
    '#203c4f': 'text-sb-indigo-600',
    '#1c3545': 'text-sb-indigo-650',
    '#182d3b': 'text-sb-indigo-700',
    '#142632': 'text-sb-indigo-750',
    '#101e28': 'text-sb-indigo-800',
    '#0c161e': 'text-sb-indigo-850',
    '#080f14': 'text-sb-indigo-900',
    '#04070a': 'text-sb-indigo-950',
    '#284b63': 'text-sb-indigo-500',
    '#3e5d73': 'text-sb-indigo-450',
    '#536f82': 'text-sb-indigo-400',
    '#698192': 'text-sb-indigo-350',
    '#7e93a1': 'text-sb-indigo-300',
    '#94a5b1': 'text-sb-indigo-250',
    '#a9b7c1': 'text-sb-indigo-200',
    '#bfc9d0': 'text-sb-indigo-150',
    '#d4dbe0': 'text-sb-indigo-100',
    '#eaedef': 'text-sb-indigo-50',
    '#34344a': 'text-sb-space-blue',
    '#2f2f43': 'text-sb-space-blue-550',
    '#2a2a3b': 'text-sb-space-blue-600',
    '#242434': 'text-sb-space-blue-650',
    '#1f1f2c': 'text-sb-space-blue-700',
    '#1a1a25': 'text-sb-space-blue-750',
    '#15151e': 'text-sb-space-blue-800',
    '#101016': 'text-sb-space-blue-850',
    '#0a0a0f': 'text-sb-space-blue-900',
    '#050507': 'text-sb-space-blue-950',
    '#34344a': 'text-sb-space-blue-500',
    '#48485c': 'text-sb-space-blue-450',
    '#5d5d6e': 'text-sb-space-blue-400',
    '#717180': 'text-sb-space-blue-350',
    '#858592': 'text-sb-space-blue-300',
    '#9a9aa5': 'text-sb-space-blue-250',
    '#aeaeb7': 'text-sb-space-blue-200',
    '#c2c2c9': 'text-sb-space-blue-150',
    '#d6d6db': 'text-sb-space-blue-100',
    '#ebebed': 'text-sb-space-blue-50',
    '#353535': 'text-sb-jet-black',
    '#303030': 'text-sb-jet-black-550',
    '#2a2a2a': 'text-sb-jet-black-600',
    '#252525': 'text-sb-jet-black-650',
    '#202020': 'text-sb-jet-black-700',
    '#1b1b1b': 'text-sb-jet-black-750',
    '#151515': 'text-sb-jet-black-800',
    '#101010': 'text-sb-jet-black-850',
    '#0b0b0b': 'text-sb-jet-black-900',
    '#050505': 'text-sb-jet-black-950',
    '#353535': 'text-sb-jet-black-500',
    '#494949': 'text-sb-jet-black-450',
    '#5d5d5d': 'text-sb-jet-black-400',
    '#727272': 'text-sb-jet-black-350',
    '#868686': 'text-sb-jet-black-300',
    '#9a9a9a': 'text-sb-jet-black-250',
    '#aeaeae': 'text-sb-jet-black-200',
    '#c2c2c2': 'text-sb-jet-black-150',
    '#d7d7d7': 'text-sb-jet-black-100',
    '#ebebeb': 'text-sb-jet-black-50',
    '#f8f4e3': 'text-sb-foam',
    '#dfdccc': 'text-sb-foam-550',
    '#c6c3b6': 'text-sb-foam-600',
    '#aeab9f': 'text-sb-foam-650',
    '#959288': 'text-sb-foam-700',
    '#7c7a72': 'text-sb-foam-750',
    '#63625b': 'text-sb-foam-800',
    '#4a4944': 'text-sb-foam-850',
    '#32312d': 'text-sb-foam-900',
    '#191817': 'text-sb-foam-950',
    '#f8f4e3': 'text-sb-foam-500',
    '#f9f5e6': 'text-sb-foam-450',
    '#f9f6e9': 'text-sb-foam-400',
    '#faf7eb': 'text-sb-foam-350',
    '#fbf8ee': 'text-sb-foam-300',
    '#fcfaf1': 'text-sb-foam-250',
    '#fcfbf4': 'text-sb-foam-200',
    '#fdfcf7': 'text-sb-foam-150',
    '#fefdf9': 'text-sb-foam-100',
    '#fefefc': 'text-sb-foam-50',
    '#d9d9d9': 'text-sb-platinum',
    '#c3c3c3': 'text-sb-platinum-550',
    '#aeaeae': 'text-sb-platinum-600',
    '#989898': 'text-sb-platinum-650',
    '#828282': 'text-sb-platinum-700',
    '#6d6d6d': 'text-sb-platinum-750',
    '#575757': 'text-sb-platinum-800',
    '#414141': 'text-sb-platinum-850',
    '#2b2b2b': 'text-sb-platinum-900',
    '#161616': 'text-sb-platinum-950',
    '#d9d9d9': 'text-sb-platinum-500',
    '#dddddd': 'text-sb-platinum-450',
    '#e1e1e1': 'text-sb-platinum-400',
    '#e4e4e4': 'text-sb-platinum-350',
    '#e8e8e8': 'text-sb-platinum-300',
    '#ececec': 'text-sb-platinum-250',
    '#f0f0f0': 'text-sb-platinum-200',
    '#f4f4f4': 'text-sb-platinum-150',
    '#f7f7f7': 'text-sb-platinum-100',
    '#fbfbfb': 'text-sb-platinum-50',
}

export const sbBGColors = {
    '#059371': 'bg-sb-green-550',
    '#048264': 'bg-sb-green-600',
    '#047258': 'bg-sb-green-650',
    '#03624b': 'bg-sb-green-700',
    '#03523f': 'bg-sb-green-750',
    '#024132': 'bg-sb-green-800',
    '#013125': 'bg-sb-green-850',
    '#012119': 'bg-sb-green-900',
    '#00100c': 'bg-sb-green-950',
    '#05a37d': 'bg-sb-green-500',
    '#05a37d': 'bg-sb-green',
    '#1eac8a': 'bg-sb-green-450',
    '#37b597': 'bg-sb-green-400',
    '#50bfa4': 'bg-sb-green-350',
    '#69c8b1': 'bg-sb-green-300',
    '#82d1be': 'bg-sb-green-250',
    '#9bdacb': 'bg-sb-green-200',
    '#b4e3d8': 'bg-sb-green-150',
    '#cdede5': 'bg-sb-green-100',
    '#e6f6f2': 'bg-sb-green-50:' ,
    '#c2e812': 'bg-sb-pear',
    '#afd110': 'bg-sb-pear-550',
    '#9bba0e': 'bg-sb-pear-600',
    '#88a20d': 'bg-sb-pear-650',
    '#748b0b': 'bg-sb-pear-700',
    '#617409': 'bg-sb-pear-750',
    '#4e5d07': 'bg-sb-pear-800',
    '#3a4605': 'bg-sb-pear-850',
    '#272e04': 'bg-sb-pear-900',
    '#131702': 'bg-sb-pear-950',
    '#c2e812': 'bg-sb-pear-500',
    '#c8ea2a': 'bg-sb-pear-450',
    '#ceed41': 'bg-sb-pear-400',
    '#d4ef59': 'bg-sb-pear-350',
    '#daf171': 'bg-sb-pear-300',
    '#e1f489': 'bg-sb-pear-250',
    '#e7f6a0': 'bg-sb-pear-200',
    '#edf8b8': 'bg-sb-pear-150',
    '#f3fad0': 'bg-sb-pear-100',
    '#f9fde7': 'bg-sb-pear-50',
    '#f4d06f': 'bg-sb-jasmine',
    '#dcbb64': 'bg-sb-jasmine-550',
    '#c3a659': 'bg-sb-jasmine-600',
    '#ab924e': 'bg-sb-jasmine-650',
    '#927d43': 'bg-sb-jasmine-700',
    '#7a6838': 'bg-sb-jasmine-750',
    '#62532c': 'bg-sb-jasmine-800',
    '#493e21': 'bg-sb-jasmine-850',
    '#312a16': 'bg-sb-jasmine-900',
    '#18150b': 'bg-sb-jasmine-950',
    '#f4d06f': 'bg-sb-jasmine-500',
    '#f5d57d': 'bg-sb-jasmine-450',
    '#f6d98c': 'bg-sb-jasmine-400',
    '#f7de9a': 'bg-sb-jasmine-350',
    '#f8e3a9': 'bg-sb-jasmine-300',
    '#fae8b7': 'bg-sb-jasmine-250',
    '#fbecc5': 'bg-sb-jasmine-200',
    '#fcf1d4': 'bg-sb-jasmine-150',
    '#fdf6e2': 'bg-sb-jasmine-100',
    '#fefaf1': 'bg-sb-jasmine-50',
    '#f49d6e': 'bg-sb-tangerine',
    '#dc8d63': 'bg-sb-tangerine-550',
    '#c37e58': 'bg-sb-tangerine-600',
    '#ab6e4d': 'bg-sb-tangerine-650',
    '#925e42': 'bg-sb-tangerine-700',
    '#7a4f37': 'bg-sb-tangerine-750',
    '#623f2c': 'bg-sb-tangerine-800',
    '#492f21': 'bg-sb-tangerine-850',
    '#311f16': 'bg-sb-tangerine-900',
    '#18100b': 'bg-sb-tangerine-950',
    '#f49d6e': 'bg-sb-tangerine-500',
    '#f5a77d': 'bg-sb-tangerine-450',
    '#f6b18b': 'bg-sb-tangerine-400',
    '#f7ba9a': 'bg-sb-tangerine-350',
    '#f8c4a8': 'bg-sb-tangerine-300',
    '#faceb7': 'bg-sb-tangerine-250',
    '#fbd8c5': 'bg-sb-tangerine-200',
    '#fce2d4': 'bg-sb-tangerine-150',
    '#fdebe2': 'bg-sb-tangerine-100',
    '#fef5f1': 'bg-sb-tangerine-50',
    '#ff4e00': 'bg-sb-orange',
    '#e64600': 'bg-sb-orange-550',
    '#cc3e00': 'bg-sb-orange-600',
    '#b33700': 'bg-sb-orange-650',
    '#992f00': 'bg-sb-orange-700',
    '#802700': 'bg-sb-orange-750',
    '#661f00': 'bg-sb-orange-800',
    '#4c1700': 'bg-sb-orange-850',
    '#331000': 'bg-sb-orange-900',
    '#190800': 'bg-sb-orange-950',
    '#ff4e00': 'bg-sb-orange-500',
    '#ff601a': 'bg-sb-orange-450',
    '#ff7133': 'bg-sb-orange-400',
    '#ff834d': 'bg-sb-orange-350',
    '#ff9566': 'bg-sb-orange-300',
    '#ffa780': 'bg-sb-orange-250',
    '#ffb899': 'bg-sb-orange-200',
    '#ffcab3': 'bg-sb-orange-150',
    '#ffdccc': 'bg-sb-orange-100',
    '#ffede6': 'bg-sb-orange-50',
    '#f7d6e0': 'bg-sb-pink',
    '#dec1ca': 'bg-sb-pink-550',
    '#c6abb3': 'bg-sb-pink-600',
    '#ad969d': 'bg-sb-pink-650',
    '#948086': 'bg-sb-pink-700',
    '#7c6b70': 'bg-sb-pink-750',
    '#63565a': 'bg-sb-pink-800',
    '#4a4043': 'bg-sb-pink-850',
    '#312b2d': 'bg-sb-pink-900',
    '#191516': 'bg-sb-pink-950',
    '#f7d6e0': 'bg-sb-pink-500',
    '#f8dae3': 'bg-sb-pink-450',
    '#f9dee6': 'bg-sb-pink-400',
    '#f9e2e9': 'bg-sb-pink-350',
    '#fae6ec': 'bg-sb-pink-300',
    '#fbebf0': 'bg-sb-pink-250',
    '#fceff3': 'bg-sb-pink-200',
    '#fdf3f6': 'bg-sb-pink-150',
    '#fdf7f9': 'bg-sb-pink-100',
    '#fefbfc': 'bg-sb-pink-50',
    '#5bc0eb': 'bg-sb-aero-blue',
    '#52add4': 'bg-sb-aero-blue-550',
    '#499abc': 'bg-sb-aero-blue-600',
    '#4086a5': 'bg-sb-aero-blue-650',
    '#37738d': 'bg-sb-aero-blue-700',
    '#2e6076': 'bg-sb-aero-blue-750',
    '#244d5e': 'bg-sb-aero-blue-800',
    '#1b3a46': 'bg-sb-aero-blue-850',
    '#12262f': 'bg-sb-aero-blue-900',
    '#091317': 'bg-sb-aero-blue-950',
    '#5bc0eb': 'bg-sb-aero-blue-500',
    '#6bc6ed': 'bg-sb-aero-blue-450',
    '#7ccdef': 'bg-sb-aero-blue-400',
    '#8cd3f1': 'bg-sb-aero-blue-350',
    '#9dd9f3': 'bg-sb-aero-blue-300',
    '#ade0f5': 'bg-sb-aero-blue-250',
    '#bde6f7': 'bg-sb-aero-blue-200',
    '#ceecf9': 'bg-sb-aero-blue-150',
    '#def2fb': 'bg-sb-aero-blue-100',
    '#eff9fd': 'bg-sb-aero-blue-50',
    '#284b63': 'bg-sb-indigo',
    '#244459': 'bg-sb-indigo-550',
    '#203c4f': 'bg-sb-indigo-600',
    '#1c3545': 'bg-sb-indigo-650',
    '#182d3b': 'bg-sb-indigo-700',
    '#142632': 'bg-sb-indigo-750',
    '#101e28': 'bg-sb-indigo-800',
    '#0c161e': 'bg-sb-indigo-850',
    '#080f14': 'bg-sb-indigo-900',
    '#04070a': 'bg-sb-indigo-950',
    '#284b63': 'bg-sb-indigo-500',
    '#3e5d73': 'bg-sb-indigo-450',
    '#536f82': 'bg-sb-indigo-400',
    '#698192': 'bg-sb-indigo-350',
    '#7e93a1': 'bg-sb-indigo-300',
    '#94a5b1': 'bg-sb-indigo-250',
    '#a9b7c1': 'bg-sb-indigo-200',
    '#bfc9d0': 'bg-sb-indigo-150',
    '#d4dbe0': 'bg-sb-indigo-100',
    '#eaedef': 'bg-sb-indigo-50',
    '#34344a': 'bg-sb-space-blue',
    '#2f2f43': 'bg-sb-space-blue-550',
    '#2a2a3b': 'bg-sb-space-blue-600',
    '#242434': 'bg-sb-space-blue-650',
    '#1f1f2c': 'bg-sb-space-blue-700',
    '#1a1a25': 'bg-sb-space-blue-750',
    '#15151e': 'bg-sb-space-blue-800',
    '#101016': 'bg-sb-space-blue-850',
    '#0a0a0f': 'bg-sb-space-blue-900',
    '#050507': 'bg-sb-space-blue-950',
    '#34344a': 'bg-sb-space-blue-500',
    '#48485c': 'bg-sb-space-blue-450',
    '#5d5d6e': 'bg-sb-space-blue-400',
    '#717180': 'bg-sb-space-blue-350',
    '#858592': 'bg-sb-space-blue-300',
    '#9a9aa5': 'bg-sb-space-blue-250',
    '#aeaeb7': 'bg-sb-space-blue-200',
    '#c2c2c9': 'bg-sb-space-blue-150',
    '#d6d6db': 'bg-sb-space-blue-100',
    '#ebebed': 'bg-sb-space-blue-50',
    '#353535': 'bg-sb-jet-black',
    '#303030': 'bg-sb-jet-black-550',
    '#2a2a2a': 'bg-sb-jet-black-600',
    '#252525': 'bg-sb-jet-black-650',
    '#202020': 'bg-sb-jet-black-700',
    '#1b1b1b': 'bg-sb-jet-black-750',
    '#151515': 'bg-sb-jet-black-800',
    '#101010': 'bg-sb-jet-black-850',
    '#0b0b0b': 'bg-sb-jet-black-900',
    '#050505': 'bg-sb-jet-black-950',
    '#353535': 'bg-sb-jet-black-500',
    '#494949': 'bg-sb-jet-black-450',
    '#5d5d5d': 'bg-sb-jet-black-400',
    '#727272': 'bg-sb-jet-black-350',
    '#868686': 'bg-sb-jet-black-300',
    '#9a9a9a': 'bg-sb-jet-black-250',
    '#aeaeae': 'bg-sb-jet-black-200',
    '#c2c2c2': 'bg-sb-jet-black-150',
    '#d7d7d7': 'bg-sb-jet-black-100',
    '#ebebeb': 'bg-sb-jet-black-50',
    '#f8f4e3': 'bg-sb-foam',
    '#dfdccc': 'bg-sb-foam-550',
    '#c6c3b6': 'bg-sb-foam-600',
    '#aeab9f': 'bg-sb-foam-650',
    '#959288': 'bg-sb-foam-700',
    '#7c7a72': 'bg-sb-foam-750',
    '#63625b': 'bg-sb-foam-800',
    '#4a4944': 'bg-sb-foam-850',
    '#32312d': 'bg-sb-foam-900',
    '#191817': 'bg-sb-foam-950',
    '#f8f4e3': 'bg-sb-foam-500',
    '#f9f5e6': 'bg-sb-foam-450',
    '#f9f6e9': 'bg-sb-foam-400',
    '#faf7eb': 'bg-sb-foam-350',
    '#fbf8ee': 'bg-sb-foam-300',
    '#fcfaf1': 'bg-sb-foam-250',
    '#fcfbf4': 'bg-sb-foam-200',
    '#fdfcf7': 'bg-sb-foam-150',
    '#fefdf9': 'bg-sb-foam-100',
    '#fefefc': 'bg-sb-foam-50',
    '#d9d9d9': 'bg-sb-platinum',
    '#c3c3c3': 'bg-sb-platinum-550',
    '#aeaeae': 'bg-sb-platinum-600',
    '#989898': 'bg-sb-platinum-650',
    '#828282': 'bg-sb-platinum-700',
    '#6d6d6d': 'bg-sb-platinum-750',
    '#575757': 'bg-sb-platinum-800',
    '#414141': 'bg-sb-platinum-850',
    '#2b2b2b': 'bg-sb-platinum-900',
    '#161616': 'bg-sb-platinum-950',
    '#d9d9d9': 'bg-sb-platinum-500',
    '#dddddd': 'bg-sb-platinum-450',
    '#e1e1e1': 'bg-sb-platinum-400',
    '#e4e4e4': 'bg-sb-platinum-350',
    '#e8e8e8': 'bg-sb-platinum-300',
    '#ececec': 'bg-sb-platinum-250',
    '#f0f0f0': 'bg-sb-platinum-200',
    '#f4f4f4': 'bg-sb-platinum-150',
    '#f7f7f7': 'bg-sb-platinum-100',
    '#fbfbfb': 'bg-sb-platinum-50',
}
