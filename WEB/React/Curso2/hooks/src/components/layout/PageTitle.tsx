import './PageTitle.css'

interface IPageTitle {
    title: string
    subtitle: string
    error?: boolean
}

const PageTitle = (props: IPageTitle) => (
    <div className={`PageTitle ${props.error ? "error" : ""}`}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

export default PageTitle