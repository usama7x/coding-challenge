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

  const sidebarContent = 
    <div style={{paddingLeft: 25}}>
      <button onClick={() => setSidebarOpen(false)} style={{ marginLeft: 215, marginTop: 10 }} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
      </button>
      <br></br>
      <br></br>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <span className="font-bold">Duration</span>
        <select className="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
            <option selected value="30">30 Minutes</option>
            <option value="45">45 Minutes</option>
            <option value="60">60 Minutes</option>
            <option value="75">75 Minutes</option>
        </select>
      </div>
    </div>
    <br></br>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <span className="font-bold">Event type</span>
          <select className="
                        form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
              <option selected value="share">Share Slots</option>
              <option value="individual">Individual Slot</option>
            </select>
          </div>
        </div>
      <br></br>
      <br></br>
      <Checkbox onChange={onCheckboxChange}><span className="font-bold">Save placeholders</span></Checkbox>
      <br></br>
      <TextArea rows={2} placeholder="Type placeholder name here"></TextArea>
      <br></br>
      <br></br>
      <TextArea rows={5} onChange={onCopyChange} value={copyState.value} placeholder="Start selecting availabilities you would like to share on your calender"></TextArea>
      <br></br>
      <br></br>

      <CopyToClipboard text={copyState.value}
        onCopy={() => setCopyState({...copyState, copied: true})}>
      <button style={{'backgroundColor': 'white'}}  className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
       <span className="font-bold">Copy to Clipboard</span> 
      </button>
      </CopyToClipboard>
    </div>
  
  return (
      <App_Sidebar
      sidebar={sidebarContent}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "hsl(0, 0%, 90%)", width: "300px" } }}
      >
        <button onClick={() => onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </App_Sidebar>

  
  );
}

export default Sidebar;
