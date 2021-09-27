export default function Layout(props) {
    return (
        <div className="md:container md:mx-auto">
            {props.children}
        </div>
    )
}