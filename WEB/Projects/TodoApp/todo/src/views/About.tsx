import PageHeader from '../components/template/PageHeader'

const About: React.FC = () => {
    return (
        <div>
            <PageHeader name="Sobre" small="Nós" />

            <h2>Nossa História</h2>
            <p>Lorem ipsum dolor, sit amet...</p>
            <h2>Missão e Visão</h2>
            <p>Lorem ipsum dolor, sit amet...</p>
            <h2>Imprensa</h2>
            <p>Lorem ipsum dolor, sit amet...</p>
        </div>
    )
}

export default About