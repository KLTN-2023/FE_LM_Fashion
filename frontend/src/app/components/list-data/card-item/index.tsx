import { Card, List, Skeleton,Image } from "antd"
import { CardItemProps } from "../type"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons"
import Meta from "antd/es/card/Meta"
const imageItem = "https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2023/Ao_thun_cotton_in_Care_Share_moi-6.jpg"

const CardItem: React.FC<CardItemProps> = ({ loading, setLoading }) => (
    <List.Item style={{ marginBottom: 50, marginTop: 50 }}>
        <Skeleton loading={loading} active avatar paragraph={{ rows: 6 }}>
            <Card
                hoverable
                cover={
                    <Image
                        preview={false}
                        style={{
                            margin: 'auto',
                            imageRendering: '-webkit-optimize-contrast'
                        }}
                        src={imageItem} />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" onClick={() => { setLoading(!loading) }} />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}>
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </Skeleton>
    </List.Item>
)
export default CardItem