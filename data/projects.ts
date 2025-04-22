// data/projects.ts

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
}

export const projects: Project[] = [
    {
        id: "project-1",
        title: "全国大学生英语竞赛",
        description: "虽然含金量不高，但是进入大学的第一个奖",
        image: "/imgs/j1.jpg",
        tags: ["英语"],
    },
    {
        id: "project-2",
        title: "数维杯",
        description: "第二次参加数学建模，那些日子值得回忆",
        image: "/imgs/j2.jpg",
        tags: ["数学建模"],
    },
    {
        id: "project-3",
        title: "软著",
        description: "第一篇软著，但是为了做而做，当时水平很差，但是做成了，现在水平稍微高了点，但是懒了...",
        image: "/imgs/j3.jpg",
        tags: ["软著"]
    },
    {
        id: "project-4",
        title: "天池大赛",
        description: "阿里的竞赛平台，薅了不少羊毛，喜欢，好玩",
        image: "/imgs/j4.jpg",
        tags: ["竞赛"]
    }
];