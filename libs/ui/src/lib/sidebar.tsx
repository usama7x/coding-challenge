import React, { useState } from "react";
import App_Sidebar from "react-sidebar";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './sidebar.module.css';
import { Select, Input, Checkbox, Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
const { Option } = Select;
const {TextArea} = Input;
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copyState, setCopyState] = useState({value: '', copied: false});

  const onCopyChange = ({target: {value}}: any) => {
    setCopyState({value, copied: false});
  };

  const onClick = ({target: {innerHTML}}: any) => {
    console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  };

  const onCopy = () => {
    setCopyState({...copyState, copied: true});
  };

  const onSetSidebarOpen = (open: any) => {
    setSidebarOpen(open);
  }

  function onChange(value: any) {
    console.log(`selected ${value}`);
  }
  
  function onSearch(val: any) {
    console.log('search:', val);
  }

  function onCheckboxChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
  }
  
  return (
      <App_Sidebar
      sidebar={<div>
        <Select
    showSearch
    placeholder="Duration"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
  >
    <Option value="30">30 Minutes</Option>
    <Option value="lucy">45 Minutes</Option>
    <Option value="tom">60 Minutes</Option>
  </Select>
  <br></br>
  <br></br>
  <Select
    showSearch
    placeholder="Event Type"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
  >
    <Option value="share">Share Slots</Option>
    <Option value="individual">Individual Slot</Option>
  </Select>
  <br></br>
  <br></br>
  <Checkbox onChange={onCheckboxChange}>Save placeholders</Checkbox>
  <br></br>
  <TextArea rows={2} placeholder="Type placeholder name here"></TextArea>
  <br></br>
  <br></br>
<TextArea rows={5} onChange={onCopyChange} value={copyState.value} placeholder="Start selecting availabilities you would like to share on your calender"></TextArea>
<br></br>
<br></br>

        <CopyToClipboard text={copyState.value}
          onCopy={() => setCopyState({...copyState, copied: true})}>
         <Button type="primary" icon={<DownloadOutlined />} shape="round" size={"large"}>
          Copy to Clipboard
        </Button>
        </CopyToClipboard>
      </div>
    }
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "grey", width: "300px" } }}
      >
        <button onClick={() => onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </App_Sidebar>

  
  );
}

export default Sidebar;
