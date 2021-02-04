import socailNetworkImage from '../../assets/image/social-network.png'
import todolistImage from '../../assets/image/todolist.png'
import currencyExchangeImage from '../../assets/image/currency-exchange.png'
import counterImage from '../../assets/image/counter.png'
import calculatorImage from '../../assets/image/calculator.png'

export const projects = [
    {
        id: '1',
        title: 'Social network',
        description: 'Technology stack: ReactJS, TS, Redux, axios, CSS. To authorize the social network, contact me.',
        imageUrl: socailNetworkImage,
        repoLink: 'https://github.com/alicereactus/project-social-network-ts',
        demoLink: 'https://alicereactus.github.io/project-social-network-ts/'
    },
    {
        id: '2',
        title: 'Todolist',
        description: 'Technology stack: ReactJS, TS, Redux, axios, Material UI, storybook.',
        imageUrl: todolistImage,
        repoLink: 'https://github.com/alicereactus/project-todolist-ts',
        demoLink: 'https://alicereactus.github.io/project-todolist-ts/'
    },
    {
        id: '3',
        title: 'Сurrency exchange',
        description: 'Technology stack: ReactJS, TS, Redux, CSS.',
        imageUrl: currencyExchangeImage,
        repoLink: 'https://github.com/alicereactus/project-currency-exchange',
        demoLink: 'https://alicereactus.github.io/project-currency-exchange/'
    },
    {
        id: '4',
        title: 'Counter with settings (Redux)',
        description: 'Technology stack: ReactJS, Redux, TS, CSS.',
        imageUrl: counterImage,
        repoLink: 'https://github.com/alicereactus/project-counter-two-with-redux',
        demoLink: 'https://alicereactus.github.io/project-counter-two-with-redux/'
    },
    {
        id: '5',
        title: 'Counter with settings (Hooks)',
        description: 'Technology stack: ReactJS (hooks), TS, CSS.',
        imageUrl: counterImage,
        repoLink: 'https://github.com/alicereactus/project-counter-two-with-hooks',
        demoLink: 'https://alicereactus.github.io/project-counter-two-with-hooks/'
    },
    {
        id: '6',
        title: 'Calculator',
        description: 'Technology stack: HTML, CSS, JS.',
        imageUrl: calculatorImage,
        repoLink: 'https://github.com/alicereactus/project-calculator',
        demoLink: 'https://alicereactus.github.io/project-calculator/'
    }
]