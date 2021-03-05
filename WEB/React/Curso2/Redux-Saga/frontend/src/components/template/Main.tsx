import './Main.css'

import Header from './Header'

interface Props {
    title: string
    subtitle: string
    icon: string
}

const Main: React.FC<Props> = props =>
    <>
        <Header {...props} />
        <main className="content">
            Conteúdo
        </main>
    </>

export default Main