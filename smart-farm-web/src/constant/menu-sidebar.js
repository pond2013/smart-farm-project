import { RiHome8Line, RiCalendarEventLine, RiCalendarCheckLine,RiHandCoinLine } from 'react-icons/ri';
const menuSidebar = [
    {
      title: 'หน้าหลัก',
      icon: <RiHome8Line />,
      path: '/home',
      pageName:'home'
    },
    {
      title: 'ตั้งค่าอุณหภูมิ',
      icon: <RiCalendarEventLine />,
      path: '/login',
      pageName:'login'
    },
  ];
  export default menuSidebar;