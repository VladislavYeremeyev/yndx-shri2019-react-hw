import React from "react";
import { cn } from "@bem-react/classname";
import "./Footer.css";
import Text from "../Text/Text";
import Link from "../Link/Link";

function Footer(props) {
  return (
    <div
      className={`Footer ${props.mix ? cn(props.mix[0])(props.mix[1]) : ""}`}
    >
      <div className="Footer-Element Footer-Element_space-r_xxl Footer-AddressBlock">
        <Text mod={{ size: "xxxs", color: "secondary" }}>
          Trade secrets of Yandex LLC. 16, Lev Tolstoy Str., Moscow, Russia,
          119021
        </Text>
      </div>
      <div className="Footer-Element Footer-Element_space-r_xxl Footer-Version">
        <Text mod={{ size: "xxxs", color: "secondary" }}>UI: 0.1.15</Text>
      </div>
      <div className="Footer-Element Footer-Element_space-r_xxl Footer-Copyright">
        <Text mod={{ size: "xxxs", color: "secondary" }}>
          &copy; 2007&mdash;2019{" "}
          <Link mod={{ color: "blue" }} href="https://yandex.ru">
            Yandex
          </Link>
        </Text>
      </div>
    </div>
  );
}

export default Footer;
