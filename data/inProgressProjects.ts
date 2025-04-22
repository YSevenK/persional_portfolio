export interface inProg {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
}

export const inProgressProjects: inProg[] = [
    {
        id: 'inprogress-1',
        title: '深度学习',
        description: 'AI的必经之路。',
        image: '/images/inprogress1.jpg',
        tags: ['Python', 'Jupyter'],
    },
    {
        id: 'inprogress-2',
        title: '数据结构',
        description: '计算机的基础!',
        image: '/images/inprogress2.jpg',
        tags: ['C'],
    },
];
