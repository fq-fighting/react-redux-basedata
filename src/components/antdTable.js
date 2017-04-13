import React,{Component} from 'react'
import { Table, Layout ,Breadcrumb , Input , Select , Icon , Button , Modal } from 'antd';
import { connect } from "react-redux";
const { Sider , Content } = Layout;
import BaseDataAction from "../actions/baseDataAction";
import DialogForm from "./dialogForm";

class AntdTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.editRecord = this.editRecord.bind(this);
    }
    componentDidMount(){
        this.props.getData();
    }
    editRecord(id){
        this.setState({ visible:true});
        this.props.getItem(id);
    }
    handleOk(){
        this.setState({visible:false});
    }
    handleCancel(){
        this.setState({visible:false});
    }
    render(){
        let { state , getData } = this.props;
        let { columns , data , editData } = state;
        let editColumns = [...columns,{
            title:"操作",
            render:(text,record)=><div><a onClick={()=>this.editRecord(record.id)}>编辑</a>&nbsp;<a>删除</a></div>,
            key:""
        }];
        return (<div>
            <Breadcrumb>
                <Breadcrumb.Item><a>一级菜单</a></Breadcrumb.Item>
                <Breadcrumb.Item><a>二级菜单</a></Breadcrumb.Item>
                <Breadcrumb.Item><a>三级菜单</a></Breadcrumb.Item>
            </Breadcrumb>
            <Layout>
                <Sider style={{background:"#fff"}}>
                    <Input
                        value={this.state.searchText}
                        onChange={this.onInputChange}
                        onPressEnter={this.onSearch}
                        style={{width: 160}}
                        suffix={<Icon type="search" />}
                    />
                    <ul>
                        <li style={{padding:5}}>国家</li>
                        <li style={{padding:5}}>地区</li>
                        <li style={{padding:5}}>省份</li>
                        <li style={{padding:5}}>城市</li>
                        <li style={{padding:5}}>币种</li>
                        <li style={{padding:5}}>计量单位</li>
                    </ul>
                </Sider>
                <Content>
                    <div className="search">
                        <Select
                            defaultValue="1"
                            style={{ width: 160 }}
                        >
                            <Select.Option value="1">启用状态</Select.Option>
                            <Select.Option value="2">保存状态</Select.Option>
                            <Select.Option value="3">停用状态</Select.Option>
                        </Select>
                        <Input
                            placeholder="输入编码/名称搜索"
                            value={this.state.searchText}
                            onChange={this.onInputChange}
                            onPressEnter={this.onSearch}
                            style={{width: 160}}
                            suffix={<Icon type="search" />}
                        />
                        <Button onClick={getData}>刷新</Button>
                    </div>
                    <Table
                        columns={editColumns}
                        dataSource={data}
                    ></Table>
                    <Modal
                        title="编辑"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <DialogForm data={editData} />
                    </Modal>
                </Content>
            </Layout>
        </div>);
    }
}
let mapStateToProps = (state)=>({
    state:state.BaseData
});
let mapDispatchToProps = (dispatch)=>({
    getData:()=>dispatch(BaseDataAction.getData()),
    getItem:(id)=>dispatch(BaseDataAction.getItem(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(AntdTable);