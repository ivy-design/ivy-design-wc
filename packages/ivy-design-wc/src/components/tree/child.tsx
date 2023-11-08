import { type SetupContext } from 'vue'
import CollapseTransition from '@/utils/collapse-transition'
import { CaretRight } from '@/utils/icons'

const TreeItem = (props: Record<string, any>, { emit }: SetupContext) => {
    const { data, props: childProps } = props

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
                <CollapseTransition>
                    <div class="tree-item__children" v-show={data.isOpen}>
                        {data[childProps.children].map((c: any) => (
                            <TreeItem data={c} props={childProps}></TreeItem>
                        ))}
                    </div>
                </CollapseTransition>
            )}
        </div>
    )
}

TreeItem.emits = ['item-click']

export { TreeItem }
