import React, { useEffect } from "react";
import { Affix, Collapse } from "antd";
import { useState } from "react";
import { reduce } from "lodash";
import style from "@/styles/DrawerBody.module.scss";
import DrawerBodyItem from "./DrawerBodyItem";

const { Panel } = Collapse;

const DrawerBody = ({
  currBuilder,
  setCurrBuilder,
  cpuList,
  setCpuList,
  ramList,
  setRamList,
  hddList,
  setHddList,
  ssdList,
  setSsdList,
  powerList,
  setPowerList,
  coolerList,
  setCoolerList,
  caseList,
  setCaseList,
  mbList,
  setMbList,
  vgaList,
  setVgaList,
  activeKey,
  setActiveKey,
}) => {
  const getTotalPrice = () => {
    let totalPrice = 0;
    cpuList.map((product) => (totalPrice += product.cnt * product.price));
    ramList.map((product) => (totalPrice += product.cnt * product.price));
    mbList.map((product) => (totalPrice += product.cnt * product.price));
    vgaList.map((product) => (totalPrice += product.cnt * product.price));
    powerList.map((product) => (totalPrice += product.cnt * product.price));
    caseList.map((product) => (totalPrice += product.cnt * product.price));
    coolerList.map((product) => (totalPrice += product.cnt * product.price));
    hddList.map((product) => (totalPrice += product.cnt * product.price));
    ssdList.map((product) => (totalPrice += product.cnt * product.price));
    return totalPrice;
  };


  return (
    <>
      <Collapse defaultActiveKey={["1","2","3","4","5","6","7","8","9"]} >
        <Panel header="CPU" key="1">
          <DrawerBodyItem
            type={1}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
        <Panel header="????????????" key="2">
          <DrawerBodyItem
            type={8}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
        <Panel header="???????????????" key="3">
          <DrawerBodyItem
            type={9}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
        <Panel header="RAM" key="4">
          <DrawerBodyItem
            type={2}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
        <Panel header="??????" key="5">
          <DrawerBodyItem
            type={5}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
        <Panel header="SSD" key="6">
          <DrawerBodyItem
            type={4}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
        <Panel header="HDD" key="7">
          <DrawerBodyItem
            type={3}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
        <Panel header="?????????" key="8">
          <DrawerBodyItem
            type={7}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
        <Panel header="??????/??????" key="9">
          <DrawerBodyItem
            type={6}
            cpuList={cpuList}
            setCpuList={setCpuList}
            mbList={mbList}
            setMbList={setMbList}
            vgaList={vgaList}
            setVgaList={setVgaList}
            ramList={ramList}
            setRamList={setRamList}
            powerList={powerList}
            setPowerList={setPowerList}
            ssdList={ssdList}
            setSsdList={setSsdList}
            hddList={hddList}
            setHddList={setHddList}
            caseList={caseList}
            setCaseList={setCaseList}
            coolerList={coolerList}
            setCoolerList={setCoolerList}
          />
        </Panel>
      </Collapse>
      <br />
      <div className={style["price"]}>
        ?????? : {getTotalPrice().toLocaleString()} ???
      </div>
      {/* </Affix> */}
    </>
  );
};

export default DrawerBody;
