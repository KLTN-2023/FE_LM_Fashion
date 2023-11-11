import { ListItemLayout, ListSize } from "antd/es/list";
import { type } from "os";
type Card = 'card'
type Other = 'other'

type ItemType = Card | Other

type ListDataProps = {
    itemLayout?: ListItemLayout | undefined
    size?: ListSize | undefined;
    onPagination: (page: number) => void;
    pageSize?: number
    className?: string;
    style?: React.CSSProperties;
    itemType: ItemType
}

type CardItemProps = {
    loading: boolean,
    setLoading: Function
}

export type { ListDataProps, ItemType, CardItemProps }
