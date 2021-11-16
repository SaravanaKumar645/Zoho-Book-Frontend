import {
  AddShoppingCart,
  Dashboard,
  ExpandLess,
  ExpandMore,
  MonetizationOn,
  Home,
  People,
  PeopleAlt,
  Receipt,
  ReceiptLong,
  ShoppingBag,
  ShoppingCart,
  StarBorder,
} from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { ListItemAvatar, Tooltip, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Collapse, Link, ListItemButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import HelpCenterSharpIcon from "@mui/icons-material/HelpCenterSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import PaymentIcon from "@mui/icons-material/Payment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import { signout } from "../services/Auth";
import * as React from "react";

const drawerWidth = 200;

function Header(props) {
  const { window } = props;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const tabPath = useRouter().asPath;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState([
    {
      item: false,
      sales: false,
      purchase: false,
    },
  ]);

  React.useEffect(() => {
    if (tabPath === "/items") {
      handleCollapaseOpen(null, "items");
    } else if (
      tabPath === "/customer" ||
      tabPath === "/estimate" ||
      tabPath === "/sales" ||
      tabPath === "/invoices" ||
      tabPath === "/paymentrecived"
    ) {
      handleCollapaseOpen(null, "sales");
    } else if (
      tabPath === "/vendor" ||
      tabPath === "/purchase" ||
      tabPath === "/paymentmade"
    ) {
      handleCollapaseOpen(null, "purchase");
    }
  }, []);
  // *For Tooltip
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      fontSize: "10pt",
      padding: "10px 15px 10px 15px",
      textAlign: "center",
    },
  }));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signout(() => {
      router.push("/");
    });
  };

  const handleCollapaseOpen = (e, name) => {
    switch (name) {
      case "items":
        {
          setCollapseOpen([
            {
              item: !collapseOpen[0].item,
              sales: false,
              purchase: false,
            },
          ]);
        }
        break;
      case "sales":
        {
          setCollapseOpen([
            {
              item: false,
              sales: !collapseOpen[0].sales,
              purchase: false,
            },
          ]);
        }
        break;
      case "purchase":
        {
          setCollapseOpen([
            {
              item: false,
              sales: false,
              purchase: !collapseOpen[0].purchase,
            },
          ]);
        }
        break;
      default:
        "";
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar
        style={{
          backgroundColor: "#eeeeee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60px",
        }}
      >
        <img
          src="/zoho-books-logo.png"
          style={{
            height: "30px",
            width: "150px",
            objectFit: "contain",
            cursor: "pointer",
          }}
        ></img>
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          href="/dashboard"
          id={tabPath === "/dashboard" ? styles["ListFocused"] : styles["List"]}
        >
          <ListItemIcon
            id={
              tabPath === "/dashboard"
                ? styles["iconListFocused"]
                : styles["iconList"]
            }
          >
            <Dashboard />
          </ListItemIcon>
          <ListItemText
            id={
              tabPath === "/dashboard"
                ? styles["iconListFocused"]
                : styles["iconList"]
            }
            primary="Dashboard"
          />
        </ListItem>
        <ListItemButton
          id={styles.List}
          color="white"
          onClick={(e) => handleCollapaseOpen(e, "items")}
        >
          <ListItemIcon id={styles.iconList}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText id={styles.iconList} primary="Items" />
          {collapseOpen[0].item ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={collapseOpen[0].item} timeout="auto" unmountOnExit>
          <List disablePadding={false}>
            <ListItem
              id={tabPath === "/items" ? styles["ListFocused"] : styles["List"]}
              sx={{ pl: 4 }}
              component={Link}
              href="/items"
            >
              <ListItemIcon
                id={
                  tabPath === "/items"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
              >
                <StarBorder />
              </ListItemIcon>
              <ListItemText
                id={
                  tabPath === "/items"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary="Items"
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          id={tabPath === "/banking" ? styles["ListFocused"] : styles["List"]}
          button
          component={Link}
          href="/banking"
        >
          <ListItemIcon
            id={
              tabPath === "/banking"
                ? styles["iconListFocused"]
                : styles["iconList"]
            }
          >
            <Home />
          </ListItemIcon>
          <ListItemText
            id={
              tabPath === "/banking"
                ? styles["iconListFocused"]
                : styles["iconList"]
            }
            primary="Banking"
          />
        </ListItem>
        <Divider />
      </List>
      <List>
        <ListItemButton
          id={styles.List}
          onClick={(e) => handleCollapaseOpen(e, "sales")}
        >
          <ListItemIcon id={styles.iconList}>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Sales" />
          {collapseOpen[0].sales ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={collapseOpen[0].sales} timeout="auto" unmountOnExit>
          <List component="div">
            {/* disablePadding */}
            <ListItemButton
              id={
                tabPath === "/customer" ? styles["ListFocused"] : styles["List"]
              }
              sx={{ pl: 4 }}
              component={Link}
              href="/customer"
            >
              <ListItemIcon
                id={
                  tabPath === "/customer"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
              >
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText
                id={
                  tabPath === "/customer"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary="Customers"
              />
            </ListItemButton>
            <ListItemButton
              id={
                tabPath === "/estimate" ? styles["ListFocused"] : styles["List"]
              }
              sx={{ pl: 4 }}
              component={Link}
              href="/estimate"
            >
              <ListItemIcon
                id={
                  tabPath === "/estimate"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
              >
                <Receipt />
              </ListItemIcon>
              <ListItemText
                id={
                  tabPath === "/estimate"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary="Estimates"
              />
            </ListItemButton>
            <ListItemButton
              id={tabPath === "/sales" ? styles["ListFocused"] : styles["List"]}
              sx={{ pl: 4 }}
              component={Link}
              href="/sales"
            >
              <ListItemIcon
                id={
                  tabPath === "/sales"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
              >
                <AddShoppingCart />
              </ListItemIcon>
              <ListItemText
                id={
                  tabPath === "/sales"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary="Sale Orders"
              />
            </ListItemButton>
            <ListItemButton
              id={
                tabPath === "/invoices" ? styles["ListFocused"] : styles["List"]
              }
              sx={{ pl: 4 }}
              component={Link}
              href="/invoices"
            >
              <ListItemIcon
                id={
                  tabPath === "/invoices"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                id={styles.iconList}
              >
                <ReceiptLong />
              </ListItemIcon>
              <ListItemText
                id={
                  tabPath === "/invoices"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary="Invoices"
              />
            </ListItemButton>
            <ListItemButton
              id={
                tabPath === "/paymentrecived"
                  ? styles["ListFocused"]
                  : styles["List"]
              }
              sx={{ pl: 4 }}
              component={Link}
              href="/paymentrecived"
            >
              <ListItemIcon
                id={
                  tabPath === "/paymentrecived"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
              >
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText
                id={
                  tabPath === "/paymentrecived"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary=" Payment Received"
              />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          id={styles.List}
          onClick={(e) => handleCollapaseOpen(e, "purchase")}
        >
          <ListItemIcon id={styles.iconList}>
            <ShoppingBag />
          </ListItemIcon>
          <ListItemText primary="Purchases" />
          {collapseOpen[0].purchase ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={collapseOpen[0].purchase} timeout="auto" unmountOnExit>
          <List component="div" disablePadding={false}>
            {/* disablePadding */}
            <ListItemButton
              id={
                tabPath === "/vendor" ? styles["ListFocused"] : styles["List"]
              }
              sx={{ pl: 4 }}
              component={Link}
              href="/vendor"
            >
              <ListItemIcon
                id={
                  tabPath === "/vendor"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
              >
                <People />
              </ListItemIcon>
              <ListItemText
                id={
                  tabPath === "/vendor"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary="Vendors"
              />
            </ListItemButton>
            <ListItemButton
              id={
                tabPath === "/purchase" ? styles["ListFocused"] : styles["List"]
              }
              sx={{ pl: 4 }}
              component={Link}
              href="/purchase"
            >
              <ListItemIcon
                id={
                  tabPath === "/purchase"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
              >
                <Receipt />
              </ListItemIcon>
              <ListItemText
                id={
                  tabPath === "/purchase"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary="Purchase Orders"
              />
            </ListItemButton>
            <ListItemButton
              id={
                tabPath === "/paymentmade"
                  ? styles["ListFocused"]
                  : styles["List"]
              }
              sx={{ pl: 4 }}
              component={Link}
              href="/paymentmade"
            >
              <ListItemIcon
                id={
                  tabPath === "/paymentmade"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
              >
                <LocalAtmIcon />
              </ListItemIcon>

              <ListItemText
                id={
                  tabPath === "/paymentmade"
                    ? styles["iconListFocused"]
                    : styles["iconList"]
                }
                primary="Payment Made"
              />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem
          button
          component={Link}
          href="/payroll"
          id={tabPath === "/payroll" ? styles["ListFocused"] : styles["List"]}
        >
          <ListItemIcon
            id={
              tabPath === "/payroll"
                ? styles["iconListFocused"]
                : styles["iconList"]
            }
          >
            <MonetizationOn />
          </ListItemIcon>
          <ListItemText
            id={
              tabPath === "/payroll"
                ? styles["iconListFocused"]
                : styles["iconList"]
            }
            primary="Payroll"
          />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#f7f7f7" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "60px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          {/* Header content New One */}
          <div className={styles.headerContent}>
            <div className={styles.IconsandSearch}>
              <BootstrapTooltip title="Quick Create">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon icon-xs quick-plus"
                  style={{
                    backgroundColor: "black",
                    padding: "4px",
                    borderRadius: "50px",
                    fill: "white",
                  }}
                >
                  <path d="M484 227H284V28c0-15.5-12.5-28-28-28s-28 12.5-28 28v199H28c-15.5 0-28 12.5-28 28v1c0 15.5 12.5 28 28 28h200v200c0 15.5 12.5 28 28 28s28-12.5 28-28V284h200c15.5 0 28-12.5 28-28v-1c0-15.5-12.5-28-28-28z"></path>
                </svg>
              </BootstrapTooltip>
              <BootstrapTooltip title="Recent Activities">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon icon-xlg align-middle d-block"
                  style={{ fill: "#787878" }}
                >
                  <path d="M.6 256.1c0-7.7.4-15.6 1.1-23.3.8-8.8 7.4-15.1 15.6-15.1 8.4 0 15.7 7 15.7 15 0 .4 0 .8-.1 1.2-.7 7.1-1 14.3-1 21.5 0 43.8 12.3 86 35.5 122.2 21.5 33.5 51.7 60.8 87.2 78.8 37.5 19 79.9 27 122.7 23.1 43.1-3.9 83.3-19.7 116.2-45.5 54.6-42.9 87.2-109.5 87.2-178.3 0-14.8-1.5-29.7-4.6-44.1-9.2-43.4-29.9-82.4-60.1-112.8-29.5-29.7-66.4-50.6-106.6-60.4-41.6-10.1-84.8-8.3-125 5.4-38.5 13.1-74.1 37.5-100.4 68.8l-1.3 1.6 62.5.5c8.7.1 15.3 6.8 15.3 15.8 0 4.4-1.7 8.5-4.6 11.4-2.8 2.8-6.6 4.3-10.9 4.2l-95-.8c-8.6-.1-15.6-7.1-15.6-15.6l.8-93.2c.1-8.8 6.9-15.3 15.8-15.3 8.8 0 15.5 6.6 15.5 15.3l-.4 48.8 1.7-1.9c3.2-3.6 6.6-7 9.9-10.2 34.8-33.7 78.8-56.8 127-66.9C253.5-3.8 303 .1 347.9 17.7c43.5 17 81 44.5 108.3 79.3 29.8 37.9 48.5 82.9 54.1 130 1.1 9.6 1.7 19.3 1.7 29 0 40.1-9.8 80.5-28.4 116.8-18.7 36.5-45.8 68.1-78.6 91.6-37.5 26.8-82 42.9-128.8 46.6-46.8 3.6-93.3-5.4-134.5-26-41.1-20.6-75.8-51.7-100.4-90C14.7 353.4.6 305.4.6 256.1z"></path>
                  <path d="M353.9 355.2c-2.5 0-4.9-.6-7.2-1.8l-98.6-49.2c-5.2-2.4-8.5-7.3-8.5-13.1v-148c0-8.4 7.1-14.7 16-14.7s16 6.3 16 14.7v137.7L362 326c6.3 3.2 9.3 9.6 7.8 16.3-1.8 7.5-8.5 12.9-15.9 12.9z"></path>
                </svg>
              </BootstrapTooltip>
              <div className={styles.searchInputBox}>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon icon-xs align-text-bottom"
                  style={{ fill: "#999999", padding: "4px" }}
                >
                  <path d="M500.7 431.3l-94.2-94.1c21.4-33.9 33.9-74.1 33.9-117.2 0-121.5-98.6-220-220.2-220S0 98.5 0 220s98.6 220 220.2 220c42.9 0 82.9-12.3 116.7-33.5l94.3 94.2c15.1 15 39.5 15 54.5 0l15-15c15.1-15 15.1-39.4 0-54.4zm-280.5-52.2c-88 0-159.3-71.2-159.3-159.1 0-87.9 71.3-159.1 159.3-159.1 88 0 159.2 71.2 159.2 159.1 0 87.9-71.3 159.1-159.2 159.1z"></path>
                </svg>
                <input type="search" placeholder="Search in Vendors"></input>
              </div>
            </div>
            <div className={styles.InfoandIconList}>
              <p className={styles.pTrial}>
                Trial expires in 12 days !&nbsp; <span> Upgrade</span>
              </p>
              <p className={styles.pCompany}>
                orgName{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 165.4 512 512"
                  className="icon icon-xsmall align-top orglist-dropdown down_arrow"
                >
                  <path d="M512 331.2c0 4.6-2 9.1-6 12.1L265 523.7c-5.3 4-12.7 4-18 0L6 343.3c-6.7-5-8-14.4-3.1-21.1 5-6.7 14.4-8 21.1-3.1l232 173.7 231.9-173.7c6.7-5 16.1-3.6 21.1 3.1 2 2.6 3 5.8 3 9z"></path>
                </svg>
              </p>
              <div className={styles.headerIconList}>
                <BootstrapTooltip title="Refer and Earn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="icon icon-lg align-text-bottom"
                  >
                    <path d="M506.3 265.6c-10.8-10.8-22.9-19.1-36.2-24.9 1.6-1.8 3.2-3.7 4.7-5.7 12.9-16.8 20-39 20-62.3 0-23.4-7.1-45.5-20-62.3-13.9-18.1-32.7-28.1-53-28.1s-39.2 10-53 28.1c-12.9 16.8-20 39-20 62.3 0 23.4 7.1 45.5 20 62.3 2.1 2.7 4.2 5.2 6.5 7.5-13.2 6.5-25.8 15.9-37.9 28-6.2 6.2-6.2 16.4 0 22.6 3.1 3.1 7.2 4.7 11.3 4.7s8.2-1.6 11.3-4.7c19.9-19.9 41.1-30 63.1-30 23.6 0 44 8.4 60.6 25.1 6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.3 0-22.6zm-84.5-151.2c22.2 0 41 26.7 41 58.4s-18.8 58.4-41 58.4-41-26.7-41-58.4 18.8-58.4 41-58.4z"></path>
                    <path d="M451.3 336.6l-44.6-37.2c-5.8-4.9-14.3-5-20.2-.2l-49.3 39.4c-6.9 5.5-8.4 15.7-2.9 22.7 3.2 4 7.9 6.1 12.6 6.1 3.5 0 7-1.1 10-3.5l22.6-18.1c-1.5 15-5.1 35.3-13.6 55.1-2.5 5.8-7.3 10.4-13.2 12.6-7.7 2.8-20.9 6.2-43.6 8.8-29.5 3.4-67.7 4.7-110.6 3.9-39.3-.8-78.9-3.5-111.5-7.4-31.9-3.9-46.8-7.8-53.4-10 3-18.2 16.8-46.5 43.1-73.4 18.2-18.6 55.9-49.8 103.9-49.8 29.3 0 62.9 10.7 92.5 29.3l21.4 16.6c6.8 5.3 16.7 4.6 22.3-1.9 6-7 4.9-17.5-2.3-23.1l-22.3-17.4-1.2-.9c-15.3-9.7-31.6-17.6-48.1-23.4 26-20.8 43.1-55.4 43.1-94.5 0-63.5-45-115.2-100.3-115.2S85.4 106.8 85.4 170.3c0 38.4 16.4 72.4 41.6 93.4-33.1 12.6-58.4 34.3-73 49.2-32.2 32.8-53 73.2-53 102.9 0 18.5 23.3 24 35.9 26.9 38.9 9.2 116.6 15.6 186.9 15.6h6.7c39.4-.2 73.6-2.5 99-6.6 35.3-5.7 54.2-14.5 61.4-28.8 14.1-28.1 19.1-57.7 20.8-77.8l19.2 16c6.8 5.7 16.9 4.7 22.5-2 5.6-6.8 4.7-16.9-2.1-22.5zm-334-166.3c0-45.9 30.6-83.2 68.3-83.2s68.3 37.3 68.3 83.2-30.6 83.2-68.3 83.2-68.3-37.3-68.3-83.2z"></path>
                  </svg>
                </BootstrapTooltip>
                <BootstrapTooltip title="Notifications">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="icon icon-lg align-text-bottom"
                  >
                    <path d="M485.9 409.5l-4.9-4.9c-30.4-30.3-47.8-72.4-47.8-115.4v-75.3c0-77.3-50.2-145.4-123.2-168.5C305.7 19.6 283.3 0 256.4 0c-26.9 0-49.3 19.6-53.5 45.3-73 22.9-123.2 91-123.2 168.4v69.4c0 47.4-18.5 92.1-52 125.8l-.6.6c-5.8 5.8-7.5 14.3-4.4 21.9 3.1 7.5 10.4 12.3 18.5 12.3h128.7C180 483 215.5 512 256.4 512s76.4-29 86.5-68.4h128.7c8.2 0 15.5-4.9 18.6-12.4 3.1-7.5 1.4-16-4.3-21.7zm-229.5 70.4c-23.4 0-44.1-15-52.9-36.3h105.7c-8.7 21.4-29.4 36.3-52.8 36.3zm90.6-68.3H67.9c11.4-14.7 20.8-30.9 27.9-48.2 10.6-25.6 16-52.6 16-80.3v-69.4c0-65.7 44.2-123.2 107.5-139.8 8.9-2.3 15.1-10.5 15.1-19.8V54c0-12.1 9.9-21.9 22.1-21.9 12.2 0 22.1 9.8 22.1 21.9v.1c0 9.3 6.2 17.5 15 19.8 63.3 16.7 107.5 74.2 107.5 139.9v75.3c0 44.5 15.6 88.1 43.2 122.5H347z"></path>
                  </svg>
                </BootstrapTooltip>
                <BootstrapTooltip title="Settings">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="icon cursor-pointer icon-lg align-text-bottom"
                  >
                    <path d="M258.3 149.8c-57.3 0-103.9 46.6-103.9 103.9 0 57.3 46.6 103.9 103.9 103.9s104-46.6 104-103.9c0-57.3-46.6-103.9-104-103.9zm0 175.9c-39.7 0-71.9-32.3-71.9-71.9 0-39.7 32.3-71.9 71.9-71.9 39.7 0 71.9 32.3 71.9 71.9.1 39.6-32.2 71.9-71.9 71.9z"></path>
                    <path d="M491.4 202.9l-38.7-14c-3-9.5-6.6-18.6-10.7-27.1l18.3-38.3c5.6-11.8 3.2-26-6-35.2l-30.5-30.6c-9.3-9.3-23.4-11.7-35.2-6.1l-38.2 18.1c-8.1-3.8-16.7-7.1-27.1-10.3l-14-38.7C304.9 8.5 293.2.4 280.2.4h-43.6c-12.9 0-24.6 8.2-29.1 20.4l-14.1 38.8c-9.7 3.1-18.8 6.7-27.1 10.7l-38.2-18.4c-11.8-5.6-26-3.2-35.2 6L62.1 88.3c-9.3 9.3-11.7 23.5-6 35.3l18 37.8c-5.2 9.8-9.2 18.7-12.2 27l-40.8 14.2C8.6 207 .2 218.7.2 232v43.3c0 13.2 8.4 25 20.7 29.2l40.9 14.3c3.1 8.8 6.9 17.7 11.7 27.1L55.6 384c-5.6 11.9-3.2 26 6.2 35.2L92.6 450c9.2 9.2 23.4 11.7 35.2 6l38.1-18.1c9.7 5.2 18.6 9.2 27.1 12.2l14.2 40.8c4.3 12.5 16 20.8 29.3 20.8h43.3c13.2 0 25-8.4 29.3-20.8l14.2-40.9c8.9-3.1 18-7 27.1-11.7l38.1 17.9c11.8 5.6 26 3.1 35.3-6.2l30.7-30.9c9.2-9.2 11.6-23.3 6-35.2l-18.2-38.4c3.8-8 7.1-16.6 10.3-27.1l38.6-14c12.3-4.3 20.6-16 20.6-29V232c0-13-8.2-24.7-20.4-29.1zm-11.6 71.8l-38.5 14c-9.2 3.3-16.1 10.6-19 19.9v.1c-2.8 9.3-5.7 16.8-8.9 23.5-4.1 8.5-4.2 18.3-.1 26.7l18.2 38.3-29.7 29.9-38-17.9c-8.9-4.1-18.8-4-27.3.5-8 4.1-16 7.6-23.7 10.3-8.9 2.9-16.1 10.1-19.3 19.1l-14.2 40.7h-41.8L223.2 439c-3.1-8.9-10-15.9-19-19-7.3-2.6-15-6.1-23.7-10.7s-19.1-4.8-27.9-.6l-37.9 18-29.9-29.8 17.9-37.9c4.1-8.9 4-18.9-.5-27.3-4.3-8.3-7.7-16.1-10.3-23.9-3.1-8.9-10.2-16-19.1-19.1l-40.6-14.2v-41.8l40.7-14.2c8.9-3.1 15.9-10 19-18.9 2.5-7 6-14.7 10.7-23.5 4.6-8.6 4.9-19 .6-27.9l-18-37.8L115 80.9l38 18.3c8.5 4.1 18.6 4 27.1-.2 7.1-3.5 15.1-6.6 23.6-9.3 9-2.9 16.3-9.9 19.6-19l14-38.5h42.1l13.9 38.4c3.3 9.2 10.6 16.1 19.9 19h.1c9.2 2.8 16.6 5.6 23.4 8.9 8.6 4.1 18.3 4.1 26.8.1l38-18 29.5 29.6-18.2 38-.1.2c-4 8.7-4 18.5.2 26.9 3.6 7.4 6.7 15.3 9.3 23.5 2.7 9 9.8 16.4 18.9 19.8l38.5 14v42.1z"></path>
                  </svg>
                </BootstrapTooltip>
                <BootstrapTooltip title="Help and Support">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="icon cursor-pointer icon-lg align-text-bottom"
                  >
                    <path d="M317.1 147.5c-15.1-13.8-35.5-20.8-60.5-20.8-23.7 0-43.1 6.5-57.7 19.4-14.6 12.9-23.5 31.5-26.4 55.5l-.6 4.9 40.4 4.8.7-4.6c2.5-15.8 7.7-27.5 15.4-34.7 7.7-7.2 17.1-10.7 28.7-10.7 12 0 21.9 3.9 30.1 11.9 8.2 8 12.2 16.9 12.2 27.3 0 5.6-1.3 10.7-4 15.4-2.8 4.9-9.3 11.9-19.3 20.7-10.7 9.4-17.9 16.5-22.1 21.5-5.8 7-10 14-12.6 20.8-3.5 9.1-5.3 19.9-5.3 32.3 0 2.1.1 5.1.2 9l.1 4.7h38.4l.1-4.8c.3-14.3 1.4-21.4 2.3-24.7 1.3-4.7 3.2-8.8 5.9-12.5 2.8-3.8 9-10 18.5-18.4 15.1-13.4 25.1-24.6 30.4-34.2 5.4-9.7 8.1-20.4 8.1-31.9 0-19.9-7.7-37-23-50.9zM256.3 385.3c12.1 0 22-9.8 22-22 0-12.1-9.8-22-22-22-12.1 0-22 9.8-22 22s9.8 22 22 22z"></path>
                    <path d="M437.4 74.6C388.9 26.1 324.5-.5 256-.5S123.1 26.2 74.6 74.6C26.1 123.1-.5 187.5-.5 256s26.7 132.9 75.1 181.4c48.5 48.5 112.9 75.1 181.4 75.1s132.9-26.7 181.4-75.1c48.5-48.5 75.1-112.9 75.1-181.4s-26.6-132.9-75.1-181.4zm-22.6 340.2c-42.4 42.4-98.8 65.8-158.8 65.8s-116.4-23.4-158.8-65.8C54.8 372.4 31.5 316 31.5 256S54.8 139.6 97.2 97.2C139.6 54.8 196 31.5 256 31.5s116.4 23.4 158.8 65.8c42.4 42.4 65.8 98.8 65.8 158.8s-23.4 116.3-65.8 158.7z"></path>
                  </svg>
                </BootstrapTooltip>
              </div>
              <img
                src="/no-user-pic.png"
                alt="my"
                aria-controls="demo-positioned-menu"
                aria-haspopup={true}
                onClick={handleClick}
              ></img>
            </div>
          </div>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#3c3c47",
              color: "white",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          container={container}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#3c3c47",
              width: drawerWidth,
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
//Header content old one
{
  /* <div 
            className="input-group rounded"
            style={{ width: "35%", marginLeft: "20px" }}
          >
            <span class="input-group-text ">
              <SearchOutlinedIcon
                style={{ color: "black", height: "16px", width: "18px" }}
              />
            </span>
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
          <Typography
            variant="h3"
            noWrap
            component="div"
            style={{
              color: "black",
              marginLeft: "100px",
              fontSize: "18px",
              fontFamily: "fantasy",
            }}
          >
            Trial expires in 8 days
          </Typography>
          &nbsp;&nbsp;
          <CircleNotificationsIcon
            style={{ color: "black", marginLeft: "60px" }}
          />
          &nbsp;&nbsp;
          <SettingsApplicationsSharpIcon style={{ color: "black" }} />
          &nbsp;&nbsp;
          <HelpCenterSharpIcon style={{ color: "black" }} />
          &nbsp;&nbsp;
          <PersonSharpIcon style={{ color: "black" }} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={handleClose}
            href=""
            className="btn btn-primary"
            // style={{
            //   padding: "2px 10px",
            //   borderRadius: "6px",
            //   textTransform: "none",
            //   background: "#008ae6",
            //   color: "#ffffff",
            // }}
          >
            <b>Logout</b>
          </button> */
}
