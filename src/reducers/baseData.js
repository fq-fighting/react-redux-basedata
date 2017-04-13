import React from 'react';
import BaseDataAction from "../actions/baseDataAction";
const initState = {
    columns:[{
        title:"编号",
        dataIndex:"code",
        key:""
    },{
        title:"名称",
        dataIndex:"name",
        key:""
    },{
        title:"状态",
        dataIndex:"state",
        key:""
    },{
        title:"类别",
        dataIndex:"type",
        key:""
    },{
        title:"描述",
        dataIndex:"description",
        key:""
    },{
        title:"创建人",
        dataIndex:"create_p",
        key:""
    },{
        title:"创建时间",
        dataIndex:"create_t",
        key:""
    },{
        title:"更新人",
        dataIndex:"updata_p",
        key:""
    },{
        title:"更新时间",
        dataIndex:"updata_t",
        key:""
    }],
    data:[],
    leftList:[],
    editData:{}
}

const BaseData = (state = initState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {...state,data:action.payload};
        case "EDIT_DATA":
            return {...state,editData:action.payload}
        default:
            return state;
    }
}

export default BaseData