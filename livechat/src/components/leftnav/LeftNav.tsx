import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import styles from "../../applayout.module.scss";

const LeftNav = () => {
  const data = [
    {
      avatar: "avatart",
      username: "Em yêu thế giới",
      lastmess: "Anh yêu em nhiều lắm hihihihihihihihiihihhihiihihhihihihi",
    },
    {
      avatar: "avatart",
      username: "Em yêu thế giới",
      lastmess: "Anh yêu em nhiều lắm hihihihihihihihiihihhihiihihhihihihi",
    },
    {
      avatar: "avatart",
      username: "Em yêu thế giới",
      lastmess: "Anh yêu em nhiều lắm hihihihihihihihiihihhihiihihhihihihi",
    },
    {
      avatar: "avatart",
      username: "Em yêu thế giới",
      lastmess: "Anh yêu em nhiều lắm hihihihihihihihiihihhihiihihhihihihi",
    },
  ];
  return (
    <div className={styles.leftnav}>
      <div className={styles.lheader}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            _placeholder={{ color: "inherit" }}
            type="tel"
            placeholder="Tìm kiếm trên messenger"
          />
        </InputGroup>
      </div>
      <div className={styles.lcontent1}>
        {data.map((item) => (
          <div className={styles.eachprofile}>
            <div className={styles.lavatar}>
              <div className={styles.lavatarActive}></div>
            </div>
            <div className={styles.lcontent}>
              <span className={styles.labeluser}>{item.username}</span>
              <span className={styles.contentMessexxx}>
                Bạn : {item.lastmess}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
