import { type FunctionalComponent } from 'vue'

interface Props {
    data: Array<Record<string, any>>
}

const month: FunctionalComponent<Props> = (props) => {
    return (
        <div class="year-pane">
            {props.data.map((item) => (
                <div class="year-item">{item.value}</div>
            ))}
        </div>
    )
}

month.props = {
    data: {
        type: Array,
        default: () => []
    }
}

export default month
