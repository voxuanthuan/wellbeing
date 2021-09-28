export default function Layout(props) {
    return (
        <div className="md:container md:mx-auto font-montserrat font-normal">
            {props.children}
        </div>
    )
}