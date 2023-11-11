import React from "react";
import { List } from "antd";
import { listGridStyle } from "./common/constants";
import Footer from "./ListDataFooter";
import Header from "./ListDataHeader";
import { CardItemProps, ListDataProps } from "./type";
import CardItem from "./ListDataCard";
// -----------------------------------------------------------------------
const DEFAULT_PAGE_SIZE = 4

const ListData: React.FC<ListDataProps> = ({ ...props }) => {
    const [loading, setLoading] = React.useState<boolean>(false)

    const { itemLayout, onPagination, itemType } = props

    const renderProps: CardItemProps = {
        loading,
        setLoading
    }

    const RenderItem: React.FC = () => {
        return (
            itemType === 'card' ? <CardItem {...renderProps} /> : <div>other</div>
        )
    }

    return (
        <List
            style={{ ...props.style } &&
            {
                margin: '50px !important',
            }}
            itemLayout={itemLayout ? itemLayout : 'vertical'}
            pagination={{
                onChange: onPagination,
                pageSize: props.pageSize ? props.pageSize : DEFAULT_PAGE_SIZE,
                align: 'center',
            }}
            grid={listGridStyle}
            dataSource={Array.from({ length: 15 }).map((_, i) => i)}
            renderItem={(item) => (
                <RenderItem />
            )}
            header={<Header />}
            footer={<Footer />}
            {...props}
        />
    )
}
export default React.memo(ListData)