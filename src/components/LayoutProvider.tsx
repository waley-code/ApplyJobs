"use client";
import React, { useEffect, useState } from "react";
import { ConfigProvider, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SetCurrentUser } from "@/redux/usersSlice";
import Loader from "./Loader";
import { SetLoading } from "@/redux/loadersSlice";


const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const {currentUser} = useSelector((state: any) => state.users)
  const router = useRouter();
  const {loading} = useSelector((state: any) => state.loaders)
  const dispatch =  useDispatch();
  const [showSidebar, setShowSidebar] = React.useState(true);
  const [menuItems, setMenuItems] = useState([
    {
      name: "Home",
      path: "/",
      icon: "ri-home-7-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-shield-user-line",
    },
    {
      name: "Applications",
      path: "/applications",
      icon: "ri-file-list-2-line",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "ri-settings-2-line",
    },
    {
      name: "Saved",
      path: "/saved",
      icon: "ri-save-line",
    },
  ]);
  const pathname = usePathname();
  const getCurrentuser = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios("api/users/currentuser");
      const isEmployer = response.data.data.userType === "employer";

      if (isEmployer) {
        const tempMenuItems = menuItems;
        tempMenuItems[2].name = "Posted Jobs"
        tempMenuItems[2].path = "/jobs";
        setMenuItems(tempMenuItems)
      }
      dispatch(SetCurrentUser(response.data.data));

    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong")
      

    }finally{
      dispatch(SetLoading(false));

    }

  }


  useEffect(()=>{
    if ((pathname !== "/login" && pathname !== "/register")) {
      getCurrentuser();
    }
    
  }, [pathname])
  const reroute = () => {
    router.push("/");
    onLogout()
  }
  const onLogout = async () => {
        try {
          dispatch(SetLoading(true));
          const response = await axios.post("api/users/logout");
          message.success(response.data.message)
          dispatch(SetCurrentUser(null));
          router.push("/login")
        } catch (error: any) {
          message.error(error.response.data.message || "Something went wrong");
        } finally {
          dispatch(SetLoading(false));
        }
  }
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#213555",
              // borderRadius: 2,

              // // Alias Token
              // colorBgContainer: "#f6ffed",
            },
          }}
        >
          {loading && <Loader />}

          {/* if route is login or register dont show layout */}

          {pathname === "/login" || pathname === "/register" ? (
            <div>{children}</div>
          ) : (
            <div className="layout-parent">
              {/* show layout */}
              <div className={showSidebar ? "sidebar" : "sidebaricon"}>
                <div>
                  {showSidebar ? (
                    <div className="logo">
                      <h1>ApplyJobs</h1>
                      <i
                        className="ri-close-fill"
                        onClick={() => setShowSidebar(false)}
                      ></i>
                    </div>
                  ) : (
                    <i
                      className="ri-menu-line"
                      style={{ color: "white" }}
                      onClick={() => setShowSidebar(true)}
                    ></i>
                  )}
                </div>
                <div className="menu-items">
                  {menuItems.map((t, index) => {
                    const isActive = pathname === t.path;
                    return (
                      <div
                        key={index}
                        onClick={() => router.push(t.path)}
                        className={`menu-item ${
                          isActive ? "active-menu-item" : ""
                        }`}
                      >
                        <i className={t.icon}></i>
                        {showSidebar ? <span>{t.name}</span> : ""}
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div className="user-info wrap">
                    {showSidebar && (
                      <div className="flex flex-col">
                        <span>{currentUser?.name}</span>
                        <span>{currentUser?.email}</span>
                      </div>
                    )}
                    <i
                      className="ri-logout-box-r-line"
                      onClick={() => reroute()}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="body">{children}</div>
            </div>
          )}
        </ConfigProvider>
      </body>
    </html>
  );
};

export default LayoutProvider;
