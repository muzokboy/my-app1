/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sparse-arrays */
import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
// import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
// import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
// import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

function createData(name, calories, fat, carbs, protein, protein2, protein3) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    protein2,
    protein3,
  };
}

const rows = [
  createData(
    1,
    "John",
    "Smith",
    "@js",
    "	a@company.com",
    "Edit",
    "Action",
    "Delete"
  ),
  createData(
    2,
    "John",
    "Digital",
    "@bd",
    "	bd@company.com",
    "Edit",
    "Action",
    "Delete"
  ),
  createData(
    3,
    "John",
    "James",
    "	@mj",
    "	mj@company.com",
    "Edit",
    "Action",
    "Delete"
  ),
  createData(
    4,
    "John",
    "Land	",
    "@cl",
    "cl@company.com",
    "Edit",
    "Action",
    "Delete"
  ),
  createData(
    5,
    "John",
    "Caroline",
    "	@nc",
    "	nc@company.com",
    "Edit",
    "Action",
    "Delete"
  ),
  createData(
    6,
    "John",
    "East",
    "@me",
    "me@company.comm",
    "Edit",
    "Action",
    "Delete"
  ),
];

function getComparator(order, orderBy) {
  return order === "desc";
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    label: "	First Name",
  },
  {
    id: "calories",
    label: "Last Name",
  },
  {
    id: "fat",
    label: "Username",
  },
  {
    id: "carbs",
    label: "Email",
  },
  {
    id: "protein",
    label: "Edit",
  },
  {
    id: "action",
    label: "Action",
  },
  {
    id: "protein3",
    label: "Delete",
  },
];

function EnhancedTableHead(props) {
  const {
    // onSelectAllClick,
    order,
    orderBy,
    // numSelected,
    // rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ padding: "10px 9px 7px", border: "1px gray solid" }}
            key={headCell.id}
            // align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          New Users Table
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip>
          {/* <IconButton sx={{ bgcolor: "white" }}> */}
          <React.Fragment>
            <ButtonGroup>
              <Button
                sx={{
                  bgcolor: "white",
                  color: "black",
                  border: "1px solid gray",
                  ":hover": { bgcolor: "#999999", border: "1px solid black" },
                  borderRadius: "0px",
                  fontSize: " 10px",
                  padding: "5px 15px 5px 15px",
                }}
              >
                Sortby
              </Button>
              <Button
                size="small"
                aria-label="select merge strategy"
                // aria-haspopup="menu"
                sx={{
                  bgcolor: "white",
                  color: "black",
                  border: "1px solid gray",
                  ":hover": { bgcolor: "#999999", border: "1px solid black" },
                  borderRadius: "0px",
                  width: "0px",
                  padding: "2px 0px 2px 0px",
                }}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener>
                      <MenuList id="split-button-menu" autoFocusItem></MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </React.Fragment>
          {/* </IconButton> */}
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected] = React.useState([]);
  const [page] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(6);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      // const newSelecteds = rows.map((n) => n.name);
      return;
    }
  };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelected(newSelected);
  // };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ border: "1px solid gray" }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      sx={{
                        border: "1px solid gray",
                      }}
                      hover
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{
                          border: "1px solid gray",
                          padding: "8px 0px 10px 9px",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid gray",
                          padding: "8px 0px 10px 9px",
                        }}
                        align="left"
                      >
                        {row.calories}
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid gray",
                          padding: "8px 0px 10px 9px",
                        }}
                        align="left"
                      >
                        {row.fat}
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid black",
                          padding: "8px 0px 10px 9px",
                        }}
                        align="left"
                      >
                        {row.carbs}
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid black",
                          padding: "8px 0px 10px 9px",
                        }}
                        align="left"
                      >
                        {row.protein}
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid black",
                          padding: "8px 0px 10px 9px",
                        }}
                        align="left"
                      >
                        <button
                          style={{
                            padding: "6px 16px 6px 16px",
                          }}
                        >
                          Edit
                        </button>
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid black",
                          padding: "8px 0px 10px 9px",
                        }}
                        align="left"
                      >
                        <React.Fragment>
                          <ButtonGroup
                            variant="contained"
                            aria-label="split button"
                          >
                            <Button
                              sx={{ borderRadius: "0px", bgcolor: "#5BC0DE" }}
                            >
                              Action
                            </Button>
                            <Button
                              size="small"
                              aria-label="select merge strategy"
                              aria-haspopup="menu"
                              sx={{ borderRadius: "0px", bgcolor: "#5BC0DE" }}
                            >
                              <ArrowDropDownIcon />
                            </Button>
                          </ButtonGroup>
                          <Popper role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                              <Grow
                                {...TransitionProps}
                                style={{
                                  transformOrigin:
                                    placement === "bottom"
                                      ? "center top"
                                      : "center bottom",
                                }}
                              >
                                <Paper>
                                  <ClickAwayListener>
                                    <MenuList
                                      id="split-button-menu"
                                      autoFocusItem
                                    ></MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                            )}
                          </Popper>
                        </React.Fragment>
                        {/* {row.protein3} */}
                      </TableCell>
                      <TableCell
                        sx={{
                          border: "1px solid black",
                          padding: "8px 0px 10px 9px",
                        }}
                        align="left"
                      >
                        <Typography
                          sx={{
                            ":hover": { textDecoration: "underline" },
                          }}
                        >
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#428bca",
                            }}
                            href="#"
                          >
                            Delete
                          </a>
                        </Typography>
                        {/* {row.protein3} */}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
