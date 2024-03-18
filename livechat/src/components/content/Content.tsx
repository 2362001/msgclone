import { PhoneIcon } from "@chakra-ui/icons";
import { Input, InputGroup } from "@chakra-ui/react";
import { AiFillGift, AiFillLike, AiFillPlusCircle } from "react-icons/ai";
import styles from "../../applayout.module.scss";
const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.ctheader}>
        <div className={styles.cthl}>
          <div className={styles.cthlct}></div>
          <span className={styles.ctusername}>Tiến thành</span>
        </div>
        <div className={styles.cthr}>
          <PhoneIcon bgSize="20px" />
        </div>
      </div>
      <div className={styles.ctcontent}></div>
      <div className={styles.ctft}>
        <div className={styles.ctft1}>
          <AiFillPlusCircle fontSize="32px" />
          <AiFillGift fontSize="32px" />
        </div>
        <div className={styles.ctft2}>
          <InputGroup>
            <Input
              _placeholder={{ color: "inherit" }}
              type="tel"
              placeholder="Aa"
            />
          </InputGroup>
        </div>
        <AiFillLike fontSize="32px" />
      </div>
    </div>
  );
};

export default Content;
