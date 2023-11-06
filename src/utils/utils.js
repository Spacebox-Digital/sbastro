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

        if (classString === '') {

            paragraphs.forEach(function(p, i, paragraphs){
                if (i + 1 === paragraphs.length){
                    p.setAttribute('class', 'mb-0 font-normal')
                } else {
                    p.setAttribute('class', 'mb-3 font-normal')
                }
            });
        } else {
            paragraphs.forEach((p) => {
                p.setAttribute('class', classString)
            });
        }

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

export const backgroundColors = {
    '#0067b1': 'bg-asas-dark-blue',
    '#0067b1': 'bg-asas-blue',
    '#6ac1ff': 'bg-asas-blue-50',
    '#55b8ff': 'bg-asas-blue-100',
    '#2ca7ff': 'bg-asas-blue-200',
    '#0496ff': 'bg-asas-blue-300',
    '#007fda': 'bg-asas-blue-400',
    '#0067b1': 'bg-asas-blue-500',
    '#004679': 'bg-asas-blue-600',
    '#002641': 'bg-asas-blue-700',
    '#000509': 'bg-asas-blue-800',
    '#00aeef': 'bg-asas-cyan',
    '#a8e7ff': 'bg-asas-cyan-50',
    '#93e2ff': 'bg-asas-cyan-100',
    '#6ad7ff': 'bg-asas-cyan-200',
    '#42cbff': 'bg-asas-cyan-300',
    '#19c0ff': 'bg-asas-cyan-400',
    '#00aeef': 'bg-asas-cyan-500',
    '#0085b7': 'bg-asas-cyan-600',
    '#005c7f': 'bg-asas-cyan-700',
    '#003347': 'bg-asas-cyan-800',
    '#000b0f': 'bg-asas-cyan-900',
    '#ff7425': 'bg-asas-orange',
    '#ffe9dd': 'bg-asas-orange-50',
    '#ffdcc8': 'bg-asas-orange-100',
    '#ffc29f': 'bg-asas-orange-200',
    '#ffa877': 'bg-asas-orange-300',
    '#ff8e4e': 'bg-asas-orange-400',
    '#ff7425': 'bg-asas-orange-500',
    '#ec5500': 'bg-asas-orange-600',
    '#b44100': 'bg-asas-orange-700',
    '#7c2d00': 'bg-asas-orange-800',
    '#441800': 'bg-asas-orange-900',
    '#280e00': 'bg-asas-orange-950',
    '#f78e1e': 'bg-asas-tangerine',
    '#fde7cf': 'bg-asas-tangerine-50',
    '#fdddbc': 'bg-asas-tangerine-100',
    '#fbc994': 'bg-asas-tangerine-200',
    '#fab66d': 'bg-asas-tangerine-300',
    '#f8a245': 'bg-asas-tangerine-400',
    '#f78e1e': 'bg-asas-tangerine-500',
    '#d57208': 'bg-asas-tangerine-600',
    '#9f5506': 'bg-asas-tangerine-700',
    '#693804': 'bg-asas-tangerine-800',
    '#331b02': 'bg-asas-tangerine-900',
    '#180d01': 'bg-asas-tangerine-950',
    '#404040': 'bg-asas-grey',
    '#9c9c9c': 'bg-asas-grey-50',
    '#929292': 'bg-asas-grey-100',
    '#7d7d7d': 'bg-asas-grey-200',
    '#696969': 'bg-asas-grey-300',
    '#545454': 'bg-asas-grey-400',
    '#404040': 'bg-asas-grey-500',
    '#242424': 'bg-asas-grey-600',
    '#080808': 'bg-asas-grey-700',
    '#000000': 'bg-black',
    '#94af1d': 'bg-asas-green',
    '#ddee96': 'bg-asas-green-50',
    '#d8eb84': 'bg-asas-green-100',
    '#cde562': 'bg-asas-green-200',
    '#c1df3f': 'bg-asas-green-300',
    '#b2d223': 'bg-asas-green-400',
    '#94af1d': 'bg-asas-green-500',
    '#6b7f15': 'bg-asas-green-600',
    '#434f0d': 'bg-asas-green-700',
    '#1a1f05': 'bg-asas-green-800',
    '#cfeb22': 'bg-asas-lime',
    '#f4faca': 'bg-asas-lime-50',
    '#f0f9b8': 'bg-asas-lime-100',
    '#e7f592': 'bg-asas-lime-200',
    '#dff26d': 'bg-asas-lime-300',
    '#d7ee47': 'bg-asas-lime-400',
    '#cfeb22': 'bg-asas-lime-500',
    '#aac312': 'bg-asas-lime-600',
    '#7e900d': 'bg-asas-lime-700',
    '#515c08': 'bg-asas-lime-800',
    '#242904': 'bg-asas-lime-900',
    '#0d0f01': 'bg-asas-lime-950',
    '#592e7f': 'bg-asas-purple',
    '#b58ed6': 'bg-asas-purple-50',
    '#ab7fd1': 'bg-asas-purple-100',
    '#9761c6': 'bg-asas-purple-200',
    '#8344bb': 'bg-asas-purple-300',
    '#6e399d': 'bg-asas-purple-400',
    '#592e7f': 'bg-asas-purple-500',
    '#3c1f56': 'bg-asas-purple-600',
    '#1f102d': 'bg-asas-purple-700',
    '#020103': 'bg-asas-purple-800',
    '#9d2189': 'bg-asas-plum',
    '#e78ed9': 'bg-asas-plum-50',
    '#e47dd3': 'bg-asas-plum-100',
    '#dd5cc8': 'bg-asas-plum-200',
    '#d63abc': 'bg-asas-plum-300',
    '#bf28a6': 'bg-asas-plum-400',
    '#9d2189': "bg-asas-plum-500",
    '#6f1761': 'bg-asas-plum-600',
    '#400e38': 'bg-asas-plum-700',
    '#120410': 'bg-asas-plum-800',
    '#fdb900': 'bg-asas-gold',
    '#ffebb6': 'bg-asas-gold-50',
    '#ffe6a1': 'bg-asas-gold-100',
    '#ffdb78': 'bg-asas-gold-200',
    '#ffd050': 'bg-asas-gold-300',
    '#ffc527': 'bg-asas-gold-400',
    '#fdb900': 'bg-asas-gold-500',
    '#c59000': 'bg-asas-gold-600',
    '#8d6700': 'bg-asas-gold-700',
    '#553e00': 'bg-asas-gold-800',
    '#1d1500': 'bg-asas-gold-900',
    '#010000': 'bg-asas-gold-950',
    '#ffd43b': 'bg-asas-lemon',
    '#fffcf3': 'bg-asas-lemon-50',
    '#fff8de': 'bg-asas-lemon-100',
    '#ffefb5': 'bg-asas-lemon-200',
    '#ffe68d': 'bg-asas-lemon-300',
    '#ffdd64': 'bg-asas-lemon-400',
    '#ffd43b': 'bg-asas-lemon-500',
    '#ffc803': 'bg-asas-lemon-600',
    '#ca9e00': 'bg-asas-lemon-700',
    '#927200': 'bg-asas-lemon-800',
    '#5a4600': 'bg-asas-lemon-900',
    '#3e3000': 'bg-asas-lemon-950',
}
