interface HeaderContent {
    pageName: string
}

export default function Header({pageName} : HeaderContent) {
    return (
        <h1>{pageName}</h1>
    )
}