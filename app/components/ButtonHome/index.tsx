import "../ButtonHome/style.css";

interface props {
  title: string;
  classBtn: string;
}

export default function ButtonHome({title, classBtn}: props) {
    return(
        <button className={classBtn}>{title}</button>
    );
}
