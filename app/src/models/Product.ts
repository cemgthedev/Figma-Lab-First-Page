export interface Product {
    id: number,
    imageUrl: string,
    title: string,
    description: string,
    price: string,
    sustainability: string[],
    delivery: string[]
}

export const list: Product[] = [
    {
        id: 1,
        imageUrl: "/Figma-Lab-First-Page/assets/images/foto1.svg",
        title: 'CAMISA VERMELHA',
        description: 'Essa é uma camisa vermelha feita de algodão com detalhes listrados preto e vermelho.',
        price: 'R$ 59,00',
        sustainability: ['Tecido Sustentável', '100% algodão', 'Garantia vitalícia'],
        delivery: ['Todo o brasil', 'Expressa em 24 horas', 'Devolução em até 30 dias']
    },
    {
        id: 2,
        imageUrl: "/Figma-Lab-First-Page/assets/images/foto2.svg",
        title: 'CAMISA LARANJA',
        description: 'Essa é uma camisa laranja feita de algodão perfeita para eventos casuais e caminhadas',
        price: 'R$ 83,45',
        sustainability: ['Tecido Sustentável', '100% algodão', 'Garantia vitalícia'],
        delivery: ['Todo o brasil', 'Expressa em 24 horas', 'Devolução em até 75 dias']
    },
    {
        id: 3,
        imageUrl: "/Figma-Lab-First-Page/assets/images/foto3.svg",
        title: 'CASACO JEANS',
        description: 'Esse é um casaco jeans estilo sport perfeito para práticas de sports radicais',
        price: 'R$ 132,00',
        sustainability: ['Tecido Sustentável', '100% algodão', 'Garantia vitalícia'],
        delivery: ['Todo o brasil', 'Expressa em 24 horas', 'Devolução em até 30 dias']
    },
    {
        id: 4,
        imageUrl: "/Figma-Lab-First-Page/assets/images/foto4.svg",
        title: 'CASACO JEANS',
        description: 'Este é um casaco jeans casual perfeito para qualquer evento cotidiano',
        price: 'R$ 63,00',
        sustainability: ['Tecido Sustentável', '100% algodão', 'Garantia vitalícia'],
        delivery: ['Todo o brasil', 'Expressa em 24 horas', 'Devolução em até 30 dias']
    },
]