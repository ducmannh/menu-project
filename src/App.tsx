/* eslint-disable @typescript-eslint/no-explicit-any */
import { data } from "./data";
import React from "react";
import "./App.css";

function App() {
  const [showElectronics, setShowElectronics] = React.useState(false);
  const [showCars, setShowCars] = React.useState(false);
  const [showLaptopItems, setShowLaptopItems] = React.useState(false);
  const [laptopData, setLaptopData] = React.useState([]);
  const [showMobileItems, setShowMobileItems] = React.useState(false);
  const [mobileData, setMobileData] = React.useState([]);
  const [showAccessoriesItems, setShowAccessoriesItems] = React.useState(false);
  const [accessoriesData, setAccessoriesData] = React.useState([]);
  const [showHeadphone, setShowHeadphone] = React.useState(false);
  const [headphoneData, setHeadphoneData] = React.useState([]);
  const [showCables, setShowCables] = React.useState(false);
  const [cablesData, setCablesData] = React.useState([]);
  const [showStorage, setShowStorage] = React.useState(false);
  const [storageData, setStorageData] = React.useState([]);
  const [showSUV, setShowSUV] = React.useState(false);
  const [SUVData, setSUVData] = React.useState([]);

  const toggleElectronics = () => {
    setShowElectronics(!showElectronics);
  };

  const toggleCars = () => {
    setShowCars(!showCars);
  };

  const toggleElectronicsItems = (item: any) => {
    if (item === "Laptop") {
      const laptopItem: any = data.find((item) => item.category === "Laptop");
      setLaptopData(laptopItem.items);
      setShowLaptopItems(!showLaptopItems);
    } else if (item === "Mobile") {
      const mobileItem: any = data.find((item) => item.category === "Mobile");
      setMobileData(mobileItem.items);
      setShowMobileItems(!showMobileItems);
    } else {
      const accessoriesItem: any = data.find(
        (item) => item.category === "Accessories"
      );
      setAccessoriesData(accessoriesItem.items);
      setShowAccessoriesItems(!showAccessoriesItems);
    }
  };

  const toggleAccessoriesItems = (item: any) => {
    if (item === "Headphone") {
      const headPhoneItem: any = data.find(
        (item) => item.category === "Headphone"
      );
      setHeadphoneData(headPhoneItem.items);
      setShowHeadphone(!showHeadphone);
    } else if (item === "Cables") {
      const cablesItem: any = data.find((item) => item.category === "Cables");
      setCablesData(cablesItem.items);
      setShowCables(!showCables);
    } else {
      const storageItem: any = data.find((item) => item.category === "Storage");
      setStorageData(storageItem.items);
      setShowStorage(!showStorage);
    }
  };

  const toggleSUVItems = (item: any) => {
    if (item === "SUV") {
      const SUVItem: any = data.find((item) => item.category === "SUV");
      setSUVData(SUVItem.items);
      setShowSUV(!showSUV);
    }
  };

  return (
    <>
      <div>
        <h1>Menu đa cấp</h1>
        <div className="menu">
          {data.map((item, index) => {
            return (
              <div key={index}>
                {item.category === "Electronics" && (
                  <div onClick={toggleElectronics} className="electronic">
                    {showElectronics ? "Electronics" : "Electronics"}
                  </div>
                )}
                {item.category === "Cars" && (
                  <div onClick={toggleCars} className="cars">{showCars ? "Cars" : "Cars"}</div>
                )}
                {showCars && item.category === "Cars" && (
                  <div className="menu-cars">
                    {item.items.map((value, index) => {
                      return (
                        <div key={index} onClick={() => toggleSUVItems(value)}>
                          {value}
                          {showSUV &&
                            value === "SUV" &&
                            SUVData.map((values, index) => {
                              return (
                                <div
                                  key={index}
                                  onClick={(e) => e.stopPropagation()}
                                  className="menu-cars-SUV"
                                >
                                  {values}
                                </div>
                              );
                            })}
                        </div>
                      );
                    })}
                  </div>
                )}
                {showElectronics && item.category === "Electronics" && (
                  <div className="menu-electronic">
                    {item.items.map((items, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          toggleElectronicsItems(item.items[index]);
                        }}
                      >
                        <div className="menu-electronic-item">
                          {items}
                          {showLaptopItems && items === "Laptop" && (
                            <div onClick={(e) => e.stopPropagation()} className="menu-laptop">
                              {laptopData.map((items, index) => {
                                return <div key={index}>{items}</div>;
                              })}
                            </div>
                          )}
                          {showMobileItems && items === "Mobile" && (
                            <div onClick={(e) => e.stopPropagation()} className="menu-mobile">
                              {mobileData.map((items, index) => {
                                return <div key={index}>{items}</div>;
                              })}
                            </div>
                          )}
                          {showAccessoriesItems && items === "Accessories" && (
                            <div onClick={(e) => e.stopPropagation()} className="menu-accessories">
                              {accessoriesData.map((items, index) => {
                                return (
                                  <div
                                    key={index}
                                    onClick={() =>
                                      toggleAccessoriesItems(items)
                                    }
                                    className="headphone-item"
                                  >
                                    {items}
                                    {showHeadphone && items === "Headphone" && (
                                      <div onClick={(e) => e.stopPropagation()}>
                                        {headphoneData.map((data, index) => {
                                          return <div key={index}>{data}</div>;
                                        })}
                                      </div>
                                    )}
                                    {showCables && items === "Cables" && (
                                      <div onClick={(e) => e.stopPropagation()}>
                                        {cablesData.map((data, index) => {
                                          return <div key={index}>{data}</div>;
                                        })}
                                      </div>
                                    )}
                                    {showStorage && items === "Storage" && (
                                      <div onClick={(e) => e.stopPropagation()}>
                                        {storageData.map((data, index) => {
                                          return <div key={index}>{data}</div>;
                                        })}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
