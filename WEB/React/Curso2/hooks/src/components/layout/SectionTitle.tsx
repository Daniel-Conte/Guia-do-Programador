import './SectionTitle.css'

interface ISectionTitle {
    title: string
}

const SectionTitle = (props: ISectionTitle) => (
    <div className="SectionTitle">
        <h3>{props.title}</h3>
    </div>
)

export default SectionTitle