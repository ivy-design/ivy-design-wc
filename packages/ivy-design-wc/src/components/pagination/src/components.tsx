import type { FunctionalComponent } from 'vue'
import { DArrowLeft, DArrowRight, More, ArrowLeft, ArrowRight } from '@/utils/icons'

interface Props {
    text?: string
    disabled?: boolean
}

type Events = {
    click(): void
}
export const Prev: FunctionalComponent<Props, Events> = (props, ctx) => {
    const handleClick = () => {
        ctx.emit('click')
    }
    return (
        <div
            class={['ivy-pagination-prev', { 'is-disabled': props.disabled }]}
            onClick={handleClick}
        >
            {props.text ? (
                <slot name="prev">
                    <span>{props.text}</span>
                </slot>
            ) : (
                <ArrowLeft />
            )}
        </div>
    )
}
Prev.emits = ['click']
Prev.props = {
    text: String,
    disabled: Boolean
}

/**Next Page */
export const Next: FunctionalComponent<Props, Events> = (props, ctx) => {
    const handleClick = () => {
        ctx.emit('click')
    }
    return (
        <div
            class={['ivy-pagination-next', { 'is-disabled': props.disabled }]}
            onClick={handleClick}
        >
            {props.text ? (
                <slot name="next">
                    <span>{props.text}</span>
                </slot>
            ) : (
                <ArrowRight />
            )}
        </div>
    )
}
Next.emits = ['click']
Next.props = {
    text: String,
    disabled: Boolean
}

/**Pager 组件 */
interface PagerProps {
    data: Array<{ value: number; status: string }>
    current: number
}
type PagerEvents = {
    click(page: number, status: string): void
}
export const Pager: FunctionalComponent<PagerProps, PagerEvents> = (props, ctx) => {
    const handleClick = (page: number, status: string) => {
        ctx.emit('click', page, status)
    }
    return (
        <ul class="ivy-pagination-wrap">
            {props.data.map((c) => {
                if (c.status === 'prev') {
                    return (
                        <li
                            class="ivy-pagination-item is-prev"
                            onClick={() => handleClick(c.value, c.status)}
                        >
                            <More class="more" />
                            <DArrowLeft class="arrow" />
                        </li>
                    )
                } else if (c.status === 'next') {
                    return (
                        <li
                            class="ivy-pagination-item is-next"
                            onClick={() => handleClick(c.value, c.status)}
                        >
                            <More class="more" />
                            <DArrowRight class="arrow" />
                        </li>
                    )
                } else {
                    return (
                        <li
                            class={[
                                'ivy-pagination-item',
                                {
                                    'is-active': c.value === props.current
                                }
                            ]}
                            onClick={() => handleClick(c.value, c.status)}
                        >
                            {c.value}
                        </li>
                    )
                }
            })}
        </ul>
    )
}
Pager.props = ['data', 'current']
Pager.emits = ['click']
