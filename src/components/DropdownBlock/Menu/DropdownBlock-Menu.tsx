import React, { useState, useEffect } from "react";
import "./DropdownBlock-Menu.css";
import "./../MenuHandle/DropdownBlock-MenuHandle.css";
import "./../HandleBar/DropdownBlock-HandleBar.css";
import "./_view/DropdownBlock-Menu_view_branches.css";
import DropdownBlockMenuItem from "../MenuItem/DropdownBlock-MenuItem";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

interface DropdownBlockMenuProps {
	view?: string;
	items: string[];
}

function DropdownBlockMenu(props: DropdownBlockMenuProps) {
  const dispatch = useDispatch();
  const redirectState = useState(false);
  const isRedirect = redirectState[0];
  const setRedirect = redirectState[1];

  useEffect(() => {
    setRedirect(false);
  });

  const chooseRepo = (repo: string) => {
    dispatch({ type: "SET_REPO_NAME", repoName: repo });
    setRedirect(true);
  };

  return (
    <>
      <ul
        className={`DropdownBlock-Menu ${
          props.view === "branches" ? "DropdownBlock-Menu_view_branches" : ""
        }`}
      >
        <div className="DropdownBlock-MenuHandle">
          <div className="DropdownBlock-HandleBar"></div>
        </div>
        {props.view === "branches"
          ? [
              {
                branch: "users/rudskoy/DEVTOOLS-43865",
                update: "Jan 11, 12:01",
              },
              {
                branch: "users/rudskoy/DEVTOOLS-43865",
                update: "Jan 11, 12:01",
              },
              {
                branch: "users/rudskoy/DEVTOOLS-43865",
                update: "Jan 11, 12:01",
              },
            ].map((elem, i) =>
              i === 1 ? (
                <React.Fragment key={i}>
                  <div className="DropdownBlock-Delimeter"></div>
                  <DropdownBlockMenuItem onClick={() => null}>
                    <div className="DropdownBlock-BranchName">
                      {elem.branch}
                    </div>
                    <div className="DropdownBlock-LastUpdate">
                      Last commit on {elem.update}
                    </div>
                  </DropdownBlockMenuItem>
                </React.Fragment>
              ) : (
                <DropdownBlockMenuItem
                  onClick={() => null}
                  mod={{ current: i === 0 }}
                  key={i}
                >
                  <div className="DropdownBlock-BranchName">{elem.branch}</div>
                  <div className="DropdownBlock-LastUpdate">
                    Last commit on {elem.update}
                  </div>
                </DropdownBlockMenuItem>
              )
            )
          : (props.items ? props.items : []).map((elem: string, i: number) => (
              <DropdownBlockMenuItem onClick={() => chooseRepo(elem)} key={i}>
                {elem}
              </DropdownBlockMenuItem>
            ))}
      </ul>
      {isRedirect ? <Redirect to="/" /> : ""}
    </>
  );
}

export default DropdownBlockMenu;
