import React from "react";
import { cn } from "@bem-react/classname";
import "./CodeBlock.css";

interface Props {
	codeLines: string[];
}

function CodeBlock(props: Props) {
  const codeBlock = cn("CodeBlock");
  return (
    <table className={codeBlock()}>
      <tbody>
        {props.codeLines.map((line, i) => (
          <tr key={i} className={codeBlock("Line")}>
            <td className={codeBlock("BlobNum")}></td>
            <td className={codeBlock("BlobCode")}>
              <span className={codeBlock("Token")}>{line}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CodeBlock;
