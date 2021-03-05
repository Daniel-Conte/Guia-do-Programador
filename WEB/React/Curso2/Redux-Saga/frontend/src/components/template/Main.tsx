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
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </>

export default Main