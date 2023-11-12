export function PortfolioLink({label,path}) {
    return (
        <div class="link">
            <a href={path}>{label}</a>
            <div class="backer"></div>
        </div>
    )
}

