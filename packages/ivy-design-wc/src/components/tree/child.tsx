import { type SetupContext, Transition } from 'vue'
import { transition } from '@/utils/collapse-transition'
import { CaretRight } from '@/utils/icons'

const TreeItem = (props: Record<string, any>, { emit }: SetupContext) => {
    const { data, props: childProps } = props
    const transitionAttrs = transition()
    const handleClick = () => {
        data.isOpen = !data.isOpen
        emit('item-click', data)
    }
    return (
        <div class="tree-item">
            <div class="tree-item__label" onClick={handleClick}>
                {data.isLeaf ? (
                    <span class="tree-item__icon">&nbsp;</span>
                ) : (
                    <CaretRight
                        class="tree-item__icon"
                        style={{ transform: `rotate(${data.isOpen ? 90 : 0}deg)` }}
                    ></CaretRight>
                )}
                <span>{data[childProps.label]}</span>
            </div>
            {data.isLeaf ? null : (
                <Transition
                    onBeforeEnter={transitionAttrs.onBeforeEnter}
                    onEnter={transitionAttrs.onEnter}
                    onAfterEnter={transitionAttrs.onAfterEnter}
                    onBeforeLeave={transitionAttrs.onBeforeLeave}
                    onLeave={transitionAttrs.onLeave}
                    onAfterLeave={transitionAttrs.onAfterLeave}
                >
                    <div class="tree-item__children" v-show={data.isOpen}>
                        <div>
                            {data[childProps.children].map((c: any) => (
                                <TreeItem data={c} props={childProps}></TreeItem>
                            ))}
                        </div>
                    </div>
                </Transition>
            )}
        </div>
    )
}

TreeItem.emits = ['item-click']

export { TreeItem }
