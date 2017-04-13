import React from 'react';
import { Input , Select , Form , Tabs ,Button } from 'antd';
import { connect } from "react-redux";
const { TabPane } = Tabs;

class Dialog extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const codeError = isFieldTouched('code') && getFieldError('code');
        const nameError = isFieldTouched('name') && getFieldError('name');
        const { data } = this.props;
        return (<Form onSubmit={()=>{
                    console.log(getFieldsError());
                }}>
            <Tabs>
                <TabPane tab="基础信息" key="1">
                    <Form.Item
                        validateStatus={codeError ? 'error' : ''}
                        help={codeError || ''}
                    >
                        {
                            getFieldDecorator("code",{
                                rules: [{ required: true, message: 'Please input your code!' }]
                            })(
                                <Input placeholder="请输入编码" />
                            )
                        }
                    </Form.Item>
                    <Form.Item
                        validateStatus={nameError ? 'error' : ''}
                        help={nameError || ''}
                    >
                        {
                            getFieldDecorator("name",{
                                rules: [{ required: true, message: 'Please input your name!' }]
                            })(
                                <Input placeholder="名称" />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        <Select></Select>
                    </Form.Item>
                    <Form.Item>
                        <Input type="textarea" />
                    </Form.Item>
                </TabPane>
                <TabPane tab="多语言" key="2">
                    <Form.Item>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                </TabPane>
            </Tabs>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    提交
                </Button>
            </Form.Item>
        </Form>);
    }
}
const DialogForm = Form.create()(Dialog);
export default connect()(DialogForm);