import socailNetworkImage from '../../assets/image/social-network.png'
import todolistImage from '../../assets/image/todolist.png'
import counterImage from '../../assets/image/counter.png'
import calculatorImage from '../../assets/image/calculator.png'

export const projects = [
    {
        id: '1',
        title: 'Social network',
        description: 'Technology stack: React, TS, Redux, axios, CSS.',
        imageUrl: socailNetworkImage,
        repoLink: 'https://github.com/alicereactus/project-social-network-ts',
        demoLink: 'https://alicereactus.github.io/project-social-network-ts/'
    },
    {
        id: '2',
        title: 'Todolist',
        description: 'Technology stack: React, TS, Redux, axios, Material UI, storybook.',
        imageUrl: todolistImage,
        repoLink: 'https://github.com/alicereactus/project-todolist-ts',
        demoLink: 'https://alicereactus.github.io/project-todolist-ts/'
    },
    {
        id: '3',
        title: 'Counter with settings (Redux)',
        description: 'Technology stack: React, Redux, TS, CSS.',
        imageUrl: counterImage,
        repoLink: 'https://github.com/alicereactus/project-counter-two-with-redux',
        demoLink: 'https://alicereactus.github.io/project-counter-two-with-redux/'
    },
    {
        id: '4',
        title: 'Counter with settings (Hooks)',
        description: 'Technology stack: React (hooks), TS, CSS.',
        imageUrl: counterImage,
        repoLink: 'https://github.com/alicereactus/project-counter-two-with-hooks',
        demoLink: 'https://alicereactus.github.io/project-counter-two-with-hooks/'
    },
    {
        id: '5',
        title: 'Calculator',
        description: 'Technology stack: HTML, CSS, JS.',
        imageUrl: calculatorImage,
        repoLink: 'https://github.com/alicereactus/project-calculator',
        demoLink: ''
    }
]