import Row from "./Row.js"

export default function ExploreCategory(props) {
    return (
        <div>
        <Row rowtitle={"Explore Our " + props.category + " Collection (These are sample books)"}></Row>
        <Row rowtitle=""></Row>
        <Row rowtitle=""></Row>
        </div>
    )
}