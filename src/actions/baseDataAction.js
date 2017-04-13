let BaseDataAction = {
    getData:()=>(dispatch)=>{
        fetch("http://10.99.2.70:9096/basedata/list")
            .then((res)=>{return res.json();})
            .then((res)=>{
                dispatch(BaseDataAction.setData(res.data.list));
            });
    },
    getItem:(id)=>(dispatch)=>{
        fetch("http://10.99.2.70:9096/basedata/get")
            .then((res)=>{return res.json();})
            .then((res)=>{
                dispatch(BaseDataAction.editData(res.data));
            });
    },
    setData:(data)=>({
        type:"SET_DATA",
        payload:data
    }),
    editData:(data)=>({
        type:"EDIT_DATA",
        payload:data
    })
}
export default BaseDataAction;