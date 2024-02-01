import { type FunctionalComponent } from 'vue'

interface Props {
    data: Array<Record<string, any>>
}

export const date: FunctionalComponent<Props> = (props) => {
    return (
        <div class="date-pane">
            {props.data.map((item) => (
                <div class="date-item">{item.value}</div>
            ))}
        </div>
    )
}

date.props = {
    data: {
        type: Array,
        default: () => []
    }
}

export const month: FunctionalComponent<Props> = (props) => {
    return (
        <div class="date-pane">
            {props.data.map((item) => (
                <div class="date-item">{item.value}</div>
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

export const year: FunctionalComponent<Props> = (props) => {
    return (
        <div class="date-pane">
            {props.data.map((item) => (
                <div class="date-item">{item.value}</div>
            ))}
        </div>
    )
}

year.props = {
    data: {
        type: Array,
        default: () => []
    }
}
