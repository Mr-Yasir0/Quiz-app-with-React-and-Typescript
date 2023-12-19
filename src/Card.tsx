import { cardType } from "./types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const Card: React.FC<cardType> = ({ question, options, submit }) => {
  const [points, setPoints] = useState<any>();
  return (
    <>
      <h1>{question}</h1>
      {options.map((i) => (
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            border: "1px black solid",
            marginTop: 1,
            borderRadius: 6,
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={submit}>
                <ListItemText primary={i} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ))}
    </>
  );
};
export default Card;
