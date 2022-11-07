import { Piggy, Safelock, Target, Flex } from "../public/Images";
import { ImHome2 } from "react-icons/im";
import Link from "next/link";
import {
  FiTarget,
  FiUser,
  FiDollarSign,
  FiFilm,
  FiThumbsUp,
  FiPercent,
  FiPaperclip,
  FiShare2,
  FiCreditCard,
  FiPhone,
} from "react-icons/fi";
import { IoIosJet } from "react-icons/io";
import { SiLibreoffice } from "react-icons/si";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { HiArrowCircleUp } from "react-icons/hi";
import { BsCircle } from "react-icons/bs";
import { BiLockAlt, BiBox } from "react-icons/bi";
import { GoGift } from "react-icons/go";
import { MdOutlineAccountBalanceWallet, MdOutlineLogout } from "react-icons/md";
// import { FlexBalance, PiggyBalance, SafeLockBalance, TargetBalance } from "../components/savings/Plans";

export const comments = [
  {
    image: Piggy,
    name: "Oluwadamilola A",
    date: "Wednesday, 5th of October 2022 by 03:08 AM",
    comment:
      "Thanks to piggyvest I've saved enough money to start up a really large business",
  },
  {
    image: Piggy,
    name: "Oluwadamilola A",
    date: "Wednesday, 5th of October 2022 by 03:08 AM",
    comment:
      "Thanks to piggyvest I've saved enough money to start up a really large business",
  },
  {
    image: Piggy,
    name: "Oluwadamilola A",
    date: "Wednesday, 5th of October 2022 by 03:08 AM",
    comment:
      "Thanks to piggyvest I've saved enough money to start up a really large business",
  },
];

export const savingsPlan = [
  {
    image: Piggy,
    path: "piggyback",
    name: "Piggybank",
    heading: "Automated Savings",
    summary:
      "Build a dedicated savings faster on your terms automatically or manually.",
    color: "#2289ff",
    background: "rgb(224, 239, 255)",
  },
  {
    image: Safelock,
    path: "safelock",
    name: "Safelock",
    heading: "Fixed Savings",
    summary:
      "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.",
    color: "#bbd0ff",
    background: "rgb(227, 245, 255)",
  },
  {
    image: Target,
    path: "target-savings",
    name: "Target Savings",
    heading: "Goal-oriented Savings",
    summary:
      "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
    color: "#13a01a",
    background: "rgb(6, 155, 64)",
  },
  {
    image: Flex,
    path: "flex-naira",
    name: "Flex Naira",
    heading: "Flexible Savings",
    summary:
      "Save, transfer, withdraw, manage and organise your money for free at any time.",
    color: "#e70892",
    background: "rgb(229, 40, 142)",
  },
];

export const Products = [
  { name: "Piggybank", path: "piggybank" },
  { name: "Invest", path: "invest" },
  { name: "Safelock", path: "safelock" },
  { name: "Target Savings", path: "target-savings" },
  { name: "Flex Naira", path: "flex-naira" },
];

export const Company = [
  { name: "About", path: "about" },
  { name: "FAQs", path: "faqs" },
  { name: "Blog", path: "blog" },
];

export const Legal = [
  { name: "Terms", path: "terms" },
  { name: "Privacy", path: "privacy" },
  { name: "Security", path: "security" },
];

export const sideBar = [
  { path: "dashboard", name: "Home", icon: <ImHome2 size={22} /> },
  { path: "dashboard/savings", name: "Savings", icon: <FiTarget size={22} /> },
  { path: "dashboard/investify", name: "Invest", icon: <IoIosJet size={22} /> },
  { path: "dashboard/settings", name: "Account", icon: <FiUser size={22} /> },
];



export const ToDoList = [
  {
    icon: <BsCircle />,
    title: "Turn on your Piggybank AutoSave 🚦",
    text: "",
  },
  {
    icon: <GoGift />,
    title: "Get Piggybank Savings Interest for October!",
    text: "Tap to earn interest on Your Piggybank Savings for October",
  },
  {
    icon: <FiThumbsUp />,
    title: "See your recent activitie",
    text: "See your most recent activities on PiggyVest",
  },
  {
    icon: "@",
    title: "Link your Pocket App",
    text: "Withdraw from your PiggyVest safer & faster💜",
  },
];

export const RecentActivities = [
  {
    text: "Flex account credited.",
    icon: <MdOutlineAccountBalanceWallet />,
    time: "1 day ago",
    currency: "₦",
    amount: 1000000,
  },
  {
    text: "Flex account credited.",
    icon: <MdOutlineAccountBalanceWallet />,
    time: "1 day ago",
    currency: "₦",
    amount: 80700,
  },
  {
    text: "Core savings debited.",
    icon: <MdOutlineAccountBalanceWallet />,
    time: "3 day ago",
    currency: "₦",
    amount: 100000,
  },
  {
    text: "Core savings debited.",
    icon: <MdOutlineAccountBalanceWallet />,
    time: "2 day ago",
    currency: "₦",
    amount: "100,000",
  },
  {
    text: "Flex account credited.",
    icon: <MdOutlineAccountBalanceWallet />,
    time: "1 day ago",
    currency: "₦",
    amount: 50000,
  },
];

export const summary = [
  {
    path: "dashboard/savings/piggybank",
    icon: <AiOutlineSecurityScan />,
    title: "Piggybank",
    text: "Strict savings automatically. Daily, weekly or Monthly. 10% p.a",
    currency: "₦",
    // amount: PiggyBank(),
    background: "rgb(204, 240, 254)",
    color: "rgb(13, 96, 216)",
  },
  {
    path: "dashboard/savings/flex",
    icon: <FiFilm />,
    title: "Flex Naira",
    text: "Flexible savings for emergencies. Free transfers, withdrawals etc. 8% p.a",
    currency: "₦",
    // amount: FlexNaira(),
    background: "rgb(255, 234, 245)",
    color: "rgb(231, 67, 156)",
  },
  {
    path: "dashboard/savings/safelockdashboard/savings/",
    icon: <BiLockAlt />,
    title: "Safelock",
    text: "Lock funds to avoid temptations. Upfront interest. Up to 13% p.a",
    currency: "₦",
    // amount: SafeLock(),
    background: "rgb(231, 246, 255)",
    color: "rgb(34, 149, 242)",
  },
  {
    path: "dashboard/savings/targets",
    icon: <FiTarget />,
    title: "Targets",
    text: "Reach your unique individual saving goals. 9% p.a",
    currency: "₦",
    // amount: Targets(),
    background: "rgb(220, 255, 235)",
    color: "rgb(39, 174, 96)",
  },
  {
    path: "dashboard/savings/p/flexdollar",
    icon: <FiDollarSign />,
    title: "Flex Dollar",
    text: "Save & grow your wealth in dollars. Up to 7% p.a in dollars",
    currency: "$",
    amount: 0,
    background: "rgb(239, 244, 245)",
    color: "#000000",
  },
  {
    path: "dashboard/savings/p/abegconnect",
    icon: "@",
    title: "PocketApp®",
    text: "Withdraw your savings to your pocket faster ⚡️",
    currency: "",
    amount: (
      <Link href="">
        <a>Connect Account</a>
      </Link>
    ),
    background: "rgb(241, 236, 254)",
    color: "rgb(117, 63, 246)",
  },
];

export const settingsLink = [
  { icon: <FiPercent />, text: "Today's Rates" },
  { icon: <FiUser />, text: "My Account Settings" },
  { icon: <FiPaperclip />, text: "Self Help" },
  { icon: <BiBox />, text: "Update KYC" },
  { icon: <FiShare2 />, text: "Refer & Earn ₦1,000.00" },
  { icon: <FiDollarSign />, text: "Withdraw Funds" },
  { icon: <FiCreditCard />, text: "My Card & Bank Settings" },
  { icon: <SiLibreoffice />, text: "View PiggyVest Library" },
  { icon: <FiPhone />, text: "Contact Us" },
  { icon: <MdOutlineLogout />, text: "Log Out" },
];
