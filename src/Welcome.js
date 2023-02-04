function Welcome(props)
{
    return <h1>{props.text} </h1>
}

export function Welcomeh2(props)
{
    console.log(props)
    return <h2>{props.children}</h2>
}
export function Welcomeh3(props)
{
    return <h3>{props.text}</h3>
}
export default Welcome;