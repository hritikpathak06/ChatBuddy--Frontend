import {
  Button,
  Dialog,
  DialogTitle,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/smapledata";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
  };

  // console.log(selectedMembers);

  const submitHandler = () => {};

  const closeHanlder = () => {

  }
  return (
    <>
      <Dialog open>
        <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"} spacing={"2rem"}>
          <DialogTitle textAlign={"center"} variant="h4">
            New Group
          </DialogTitle>
          <TextField
            value={groupName.value}
            onChange={groupName.changeHandler}
            label="Group Name"
          />
          <Typography variant="body1">Members</Typography>
          <Stack>
            {members.map((i) => {
              return (
                <UserItem
                  user={i}
                  key={i._id}
                  handler={selectMemberHandler}
                  isAdded={selectedMembers.includes(i._id)}
                />
              );
            })}
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Button variant="text" color="error">
              Cancel
            </Button>
            <Button variant="contained" onClick={submitHandler}>
              Create
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default NewGroup;
